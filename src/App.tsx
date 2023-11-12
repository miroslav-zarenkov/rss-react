import { Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './MainPage';
import Details from './Details';
import { useEffect } from 'react';
import Error404 from './Error404';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/page/1');
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/page/:pageNumber"
        element={
          <>
            <MainPage />
          </>
        }
      >
        <Route path="/page/:pageNumber/details/:id" element={<Details />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
