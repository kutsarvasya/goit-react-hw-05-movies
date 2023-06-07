import { getMoviesCredits } from 'components/SearchMoviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    async function getCast() {
      try {
        const data = await getMoviesCredits(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCast();
  }, [id]);

  return (
    cast && (
      <ul>
        {cast.map(obj => (
          <li key={obj.id}>
            <img
              width="150"
              src={
                obj.profile_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_bestv2${obj.profile_path}`
                  : 'https://cdn.create.vista.com/api/media/medium/64486529/stock-photo-people?token='
              }
              alt={obj.original_name}
            />
            <h3>{obj.name}</h3>
            <p>character: {obj.character}</p>
          </li>
        ))}
      </ul>
    )
  );
}

export default Cast;
