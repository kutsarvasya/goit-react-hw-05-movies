import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container } from './MovieItem.staled';
import { useRef } from 'react';

function MovieItem({ movie }) {
  const year = new Date(movie.release_date).getFullYear();

  const location = useLocation();
  const from = location?.state?.from ?? '/';
  const savedLocation = useRef(from);
  const navigate = useNavigate();
  const onBtnClick = () => {
    navigate(savedLocation.current);
  };

  return (
    <>
      <button onClick={onBtnClick}>go back</button>
      <Container>
        <img
          width="220"
          height="330"
          src={
            movie.backdrop_path
              ? `https://www.themoviedb.org/t/p/w220_and_h330_bestv2${movie.backdrop_path}`
              : 'https://cdn.create.vista.com/api/media/medium/64486529/stock-photo-people?token='
          }
          alt=""
        />
        <div>
          <h2>
            {movie.title}({year})
          </h2>
          <p>User Score:{Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres.map(g => (
              <span key={g.id}>{g.name} </span>
            ))}
          </p>
        </div>
      </Container>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default MovieItem;
