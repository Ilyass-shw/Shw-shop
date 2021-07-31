import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  renderWithFormProvider,
  renderWithReactHookForm,
  screen,
  waitFor,
} from '../../../test-utils/testUtils';
import MarketingCheckbox from './MarketingCheckbox';

describe('MarketingCheckbox', () => {
  it('should render', () => {
    renderWithFormProvider(<MarketingCheckbox />);
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithFormProvider(<MarketingCheckbox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should submit correct form data', async () => {
    const saveData = jest.fn();
    renderWithReactHookForm(<MarketingCheckbox />, saveData);
    const submitButton = screen.getByTestId('testSubmitButton');
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(saveData).toBeCalledTimes(1);
      expect(saveData).toBeCalledWith({ buyerAcceptMarketing: false });
    });
    userEvent.click(screen.getByRole('checkbox'));
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(saveData).toBeCalledTimes(2);
      expect(saveData).toBeCalledWith({ buyerAcceptMarketing: true });
    });
  });
});
