import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import AppBar from './AppBar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomePage = lazy(() =>
  import('./HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './MoviesPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  )
);
const MovieCast = lazy(() =>
  import(
    './MoviesPage/MovieDetailsPage/MovieCast' /* webpackChunkName: "movies-cast" */
  )
);
const MovieReviews = lazy(() =>
  import(
    './MoviesPage/MovieDetailsPage/MovieReviews' /* webpackChunkName: "movies-reviews" */
  )
);
const NotFound = lazy(() =>
  import('views/NotFound' /* webpackChunkName: "not-found" */)
);

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            index
            element={
              <Suspense fallback={<Skeleton count={10} width={400} />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense
                fallback={<Skeleton count={1} width={300} height={50} />}
              >
                <MoviesPage />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<Skeleton count={10} width={400} />}>
                <MovieDetailsPage />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<Skeleton count={10} width={400} />}>
                  <MovieCast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<Skeleton count={10} width={400} />}>
                  <MovieReviews />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <NotFound
                message={'Page not found. Click to home or to movies'}
              />
            }
          />
        </Route>
      </Routes>
    </Container>
  );
}
