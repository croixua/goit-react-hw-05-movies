import { useLocation } from 'react-router-dom';

export default function MovieReviewsView({ reviews }) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <hr />
      <ul>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
