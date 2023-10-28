import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './normalize.css';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
