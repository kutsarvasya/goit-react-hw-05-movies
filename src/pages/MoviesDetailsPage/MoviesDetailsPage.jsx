import MovieItem from 'components/MovieItem/MovieItem';
import { searchMoviesDetails } from 'components/SearchMoviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MoviesDetailsPage() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    async function getDetails() {
      try {
        const data = await searchMoviesDetails(id);
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [id]);

  return details && <MovieItem movie={details} />;
}
export default MoviesDetailsPage;
