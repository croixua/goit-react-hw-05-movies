import { Link } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieView({ movieDetails, fromPage }) {
  const from = fromPage?.state?.from || '/';
  const { poster_path, original_title, overview, genres, vote_average } =
    movieDetails;

  return (
    <>
      <div>
        <img src={`${BASE_URL}${poster_path}`} alt={original_title}></img>
      </div>
      <div>
        <h2>{original_title}</h2>
        <p>User Score: {`${vote_average}`}</p>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h3>Genres</h3>
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <hr />
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={'cast'} state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
