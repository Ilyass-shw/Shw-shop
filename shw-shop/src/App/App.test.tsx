import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

describe('App', () => {
  window.alert = (): void => undefined; // provide an empty implementation for window.alert
  window.scrollTo = (): void => undefined; // provide an empty implementation for window.alert

  const renderApp = (): RenderResult => {
    const history = createMemoryHistory();

    return render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );
  };
  it('should render ', () => {
    renderApp();
  });
});
