export default function MovieReviewsView({ reviews }) {
  console.log(reviews);
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
