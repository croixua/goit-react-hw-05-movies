import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from '../../../services/API';
import MovieView from 'views/MovieView';
import NotFound from 'views/NotFound/NotFound';

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [id, setID] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const [error, setError] = useState(null);

  const fromPage = location?.state?.from || '/';

  useEffect(() => {
    setID(movieId);
  }, [movieId]);

  useEffect(() => {
    if (!id) return;

    API.searchMovieByID(id)
      .then(setMovieDetails)
      .catch(({ message }) => setError(message));
  }, [id]);

  const goBack = () => {
    navigate(fromPage);
  };

  return (
    <>
      <button type="button" onClick={goBack}>
        Go back
      </button>

      {movieDetails && (
        <MovieView movieDetails={movieDetails} fromPage={location} />
      )}
      {error && <NotFound message={error} />}

      <Outlet />
    </>
  );
}
