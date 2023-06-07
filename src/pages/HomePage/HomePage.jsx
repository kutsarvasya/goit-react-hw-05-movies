import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'components/SearchMoviesApi';
import { useEffect, useState } from 'react';

function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    async function getMovies() {
      try {
        const { results } = await searchMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);
  return movies && <MoviesList page={'home'} movies={movies} />;
}

export default HomePage;
