import { Link, useLocation } from 'react-router-dom';

export default function List({ movies }) {
  const { pathname, search } = useLocation();

  return (
    <ul>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: { pathname, search } }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
