import { getMoviesReviews } from 'components/SearchMoviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    async function getCast() {
      try {
        const data = await getMoviesReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [id]);

  return reviews ? (
    <ul>
      {reviews.map(obj => (
        <li key={obj.id}>
          <h3>Author: {obj.author}</h3>
          <p>{obj.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <h3>We don't have any reviews for this movies</h3>
  );
}

export default Reviews;
