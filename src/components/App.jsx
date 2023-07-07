import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navbar from 'components/Navbar/Navbar';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const HitMoviesPage = lazy(() => import('pages/HitMoviesPage/HitMoviesPage'));

export const App = () => {
  return (
    <>
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hits" element={<HitMoviesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
