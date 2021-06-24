import { Link, useLocation } from 'react-router-dom';
import { CurretMovieSuggestionsType } from '../type';
import s from './MovieDetails.module.css';

type MovieSuggestionsType = {
  movieSuggestions: CurretMovieSuggestionsType[];
};

export const MovieSuggestions: React.FC<MovieSuggestionsType> = ({
  movieSuggestions,
}) => {
  return (
    <div className={s.movieSuggestions}>
      {movieSuggestions.map((m: CurretMovieSuggestionsType) => {
        return (
          <MovieSuggestionsCard
            key={m.id}
            title={m.title}
            medium_cover_image={m.medium_cover_image}
            id={m.id}
          />
        );
      })}
    </div>
  );
};

const MovieSuggestionsCard: React.FC<CurretMovieSuggestionsType> = ({
  title,
  medium_cover_image,
  id,
}) => {
  console.log(useLocation().pathname.split('/'));
  return (
    <div className={s.movieSuggestionsCard}>
      <Link to={`/movie/${id}`}>
        <img src={medium_cover_image} alt="" />
        <div>{title}</div>
      </Link>
    </div>
  );
};
