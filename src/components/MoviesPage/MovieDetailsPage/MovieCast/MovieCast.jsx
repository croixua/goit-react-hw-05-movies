import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CastView from 'views/MovieCastView';
import * as API from '../../../../services/API';
import NotFound from 'views/NotFound/NotFound';

export default function MovieCast() {
  const { movieId } = useParams();
  const [id, setID] = useState();
  const [cast, setCast] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setID(movieId);
  }, [movieId]);

  useEffect(() => {
    if (!id) return;

    API.searchMovieCastByID(id)
      .then(({ cast }) => setCast(cast))
      .catch(({ message }) => setError(message));
  }, [id]);

  return (
    <>
      {cast && <CastView cast={cast} />}
      {error && <NotFound message={error} />}
    </>
  );
}
