import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Error404 from '../components/Error404/Error404';
import MainPage from '../pages/MainPage';
import Details from '../components/Details/Details';

it('should display Error 404 for invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/invalid-route']}>
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
    </MemoryRouter>
  );
  const text = screen.queryByText('Error 404');
  expect(text).toBeVisible();
});

it('should not display Error 404 for valid route', () => {
  render(
    <MemoryRouter initialEntries={['/page/1']}>
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
    </MemoryRouter>
  );
  const text = screen.queryByText('Error 404');
  expect(text).toBeNull();
});
