import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from 'views/NotFound';
import MovieReviewsView from 'views/MovieReviewsView';
import * as API from 'services/API';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [id, setID] = useState();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setID(movieId);
  }, [movieId]);

  useEffect(() => {
    if (!id) return;

    API.searchMovieReviewsByID(id)
      .then(setReviews)
      .catch(({ message }) => setError(message));
  }, [id]);

  return (
    <>
      {reviews && <MovieReviewsView reviews={reviews} />}
      {error && <NotFound message={error} />}
    </>
  );
}
