import { Link, Nav } from './Navigate.styled';

function Navigate() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Nav>
  );
}

export default Navigate;
