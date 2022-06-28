const BASE_URL = 'https://image.tmdb.org/t/p/w200';

export default function CastView({ cast }) {
  return (
    <ul>
      {cast.map(({ name, character, profile_path, id }) => (
        <li key={id}>
          <img src={`${BASE_URL}${profile_path}`} alt={character}></img>
          <p>Name: {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
