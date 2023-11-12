import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </ErrorBoundary>
  </BrowserRouter>
);
