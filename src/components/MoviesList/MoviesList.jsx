import { Link, useLocation } from 'react-router-dom';

function MoviesList({ page, movies }) {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={page === 'movies' ? '' + movie.id : 'movies/' + movie.id}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MoviesList;
