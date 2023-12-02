import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/App.css';
import MainPage from './pages/MainPage';
import UncontrolledForm from './pages/UncontrolledForm';
import ControlledForm from './pages/ControlledForm';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/uncontrolled-form" element={<UncontrolledForm />} />
        <Route path="/controlled-form" element={<ControlledForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
