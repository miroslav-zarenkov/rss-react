import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Details from '../components/Details/Details';
import Error404 from '../components/Error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/page/:pageNumber" element={<MainPage />}>
          <Route path="/page/:pageNumber/details/:id" element={<Details />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
