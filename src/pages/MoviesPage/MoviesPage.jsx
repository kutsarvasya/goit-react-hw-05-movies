import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { getMoviesBySearch } from 'components/SearchMoviesApi';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function MoviesPage() {
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearch = useMemo(
    () => searchParams.get('query') ?? '',
    [searchParams]
  );
  useEffect(() => {
    if (!querySearch) return;
    async function getMovies() {
      const data = await getMoviesBySearch(querySearch);
      setMovies(data.results);
    }
    getMovies();
  }, [querySearch]);

  const resultBySearch = data => {
    setSearchParams(data);
  };

  return (
    <>
      <SearchForm resultBySearch={resultBySearch} />
      {movies && <MoviesList page={'movies'} movies={movies} />}
    </>
  );
}
export default MoviesPage;
