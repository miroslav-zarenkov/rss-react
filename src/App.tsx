import { Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './MainPage';
import Details from './Details';
import { useEffect } from 'react';

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
    </Routes>
  );
}

export default App;
