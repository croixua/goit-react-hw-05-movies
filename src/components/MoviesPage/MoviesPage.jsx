import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import SearchBar from './SearchBar';
import List from 'views/List';
import NotFound from 'views/NotFound/NotFound';
import * as API from 'services/API';
import 'react-loading-skeleton/dist/skeleton.css';

export default function MoviesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');

    if (!query) return;
    setIsLoading(true);
    setError(null);
    setMovies([]);

    fetchMovies(query);
  }, [location.search]);

  const fetchMovies = async query => {
    await API.searchMovies(query)
      .then(setMovies)
      .catch(({ message }) => setError(message));

    setIsLoading(false);
  };

  const handleSubmit = query => {
    navigate(`?query=${query}`);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {movies && <List movies={movies} />}
      {error && <NotFound message={error} />}
      {isLoading && <Skeleton count={10} width={400} />}
    </>
  );
}
