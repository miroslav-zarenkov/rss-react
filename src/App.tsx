import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/App.css';
import MainPage from './pages/MainPage';
import Error404 from './pages/Error404';
import UncontrolledPage from './pages/UncontrolledPage';
import ControlledPage from './pages/ControlledPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/uncontrolled" element={<UncontrolledPage />} />
        <Route path="/controlled" element={<ControlledPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
