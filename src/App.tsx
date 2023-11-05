import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Details from './Details';

function App() {
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
