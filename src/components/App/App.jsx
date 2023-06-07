import Layout from 'components/Layout/Layout';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// import HomePage from 'pages/HomePage/HomePage';
// import MoviesDetailsPage from 'pages/MoviesDetailsPage/MoviesDetailsPage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';

const Cast = lazy(() => import('components/Cast/Cast'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesDetailsPage = lazy(() =>
  import('pages/MoviesDetailsPage/MoviesDetailsPage')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
