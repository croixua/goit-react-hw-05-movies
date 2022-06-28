import { useState, useEffect } from 'react';
import * as API from '../../services/API';
import List from 'views/List';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const results = await API.fetchTrendingMovies();

    setMovies(results);
  };

  return <List movies={movies} />;
}
