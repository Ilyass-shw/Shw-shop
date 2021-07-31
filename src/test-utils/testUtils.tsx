import React, { ReactElement } from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import store, { makeCustomTestStore } from './faksestore';
import { RenderReturn, StoreType, useFormProps } from './types';
import { BrowserRouter } from 'react-router-dom';
import { realStoreType } from '../App/store';
import { useForm, FormProvider } from 'react-hook-form';

export const render = (ui: React.ReactElement): RenderReturn => {
  return rtlRender(ui);
};

// ============= ============= ============= ============= =============

export const renderWithStore = (
  ui: React.ReactElement,
  MyStore: realStoreType,
  WithRouter?: 'withRouter',
): RenderReturn => {
  if (WithRouter) {
    return rtlRender(
      <Provider store={MyStore}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>,
    );
  } else {
    return rtlRender(<Provider store={MyStore}>{ui}</Provider>);
  }
};

// ============= ============= ============= ============= =============

export const renderWithRouter = (ui: React.ReactElement): RenderReturn => {
  return rtlRender(<BrowserRouter>{ui}</BrowserRouter>);
};

// ============= ============= ============= ============= =============

export const makeTestStore = (
  Name?: string,
  initialState?: Record<string, unknown>,
  reducers = {},
): StoreType => {
  if (Name && initialState) {
    const CustomTestStore = makeCustomTestStore(Name, initialState, reducers);
    const origDispatch = CustomTestStore.dispatch;
    CustomTestStore.dispatch = jest.fn(origDispatch);
    return CustomTestStore;
  } else {
    const origDispatch = store.dispatch as jest.Mock;
    store.dispatch = jest.fn(origDispatch);
    return store;
  }
};

// re-export everything
export * from '@testing-library/react';

// ============= ============= ============= ============= =============

export const renderWithFormProvider = (
  ui: ReactElement,
  WithRouter?: 'withRouter',
  { defaultValues = {} } = {},
): RenderResult => {
  // let reactHookFormMethods = {};

  const Wrapper: React.FC = ({ children }) => {
    const methods = useForm({ defaultValues });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  const WithRouterWrapper: React.FC = ({ children }) => {
    const methods = useForm({ defaultValues });
    return (
      <BrowserRouter>
        <FormProvider {...methods}>{children}</FormProvider>
      </BrowserRouter>
    );
  };

  if (!WithRouter) {
    return rtlRender(ui, { wrapper: Wrapper });
  }
  return rtlRender(ui, { wrapper: WithRouterWrapper });
};

// ============= ============= ============= ============= =============

export const renderWithReactHookForm = (
  ui: JSX.Element,
  saveData: jest.Mock,
): RenderResult => {
  const Wrapper: React.FC = ({ children }) => {
    const methods = useForm<useFormProps>();
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            saveData(data);
          })}
        >
          <BrowserRouter>{children}</BrowserRouter>
          <button type="submit" data-testid="testSubmitButton"></button>
        </form>
      </FormProvider>
    );
  };
  return rtlRender(<Wrapper>{ui}</Wrapper>);
};
