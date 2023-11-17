import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<App />} />,
        </Routes>
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>
);
