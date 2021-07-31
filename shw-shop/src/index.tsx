import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import Store from './App/store';
import reportWebVitals from './reportWebVitals';

const startWorker = async () => {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production' ) {
    const { worker } = await import('./mocks/browser');
    worker.start();
  }
};

const OrenoApp = async () => {
  await startWorker();
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
OrenoApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
