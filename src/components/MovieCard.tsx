import { Link } from 'react-router-dom';
import preloader from '../assets/empty.png';
import Img from './Img';

type MovieCardType = {
  genre: string[];
  title: string;
  year: number;
  rating: number;
  bg: string;
  id: number;
};

export const MovieCard: React.FC<MovieCardType> = ({
  genre,
  title,
  year,
  rating,
  bg,
  id,
}) => {
  const fixedGenres = genre?.slice(0, 3);
  const tilteValid = title.length > 20 ? title.slice(0, 16) + '...' : title;
  return (
    <div className="card">
      <h2 className="card-title">{tilteValid}</h2>
      <Img preloader={preloader} img={bg} />
      <div className="card-desc">
        <h2>{title}</h2>
        Rating - {rating}
        <br />
        {fixedGenres
          ? fixedGenres.map((genre) => <div key={genre}>{genre}</div>)
          : ''}
        <br />
        {year}
        <div className="card-link">
          <Link to={`movie/${id}`}>More</Link>
        </div>
      </div>
    </div>
  );
};
