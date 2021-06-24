import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../redux/reducer';
import { RootReducer } from '../type';
import Loader from '../utils/Loader';
import not_found from '../assets/not_found.jpg';

import { MovieCard } from './MovieCard';

export const MoviesList = () => {
  const listOfMovies = useSelector((state: RootReducer) => state.reducer.list);
  const isLoading = useSelector(
    (state: RootReducer) => state.reducer.isLoading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesList({ title: '', page: 1 }));
  }, []);

  return (
    <div className={'cards-inner'}>
      <div className={'cards'}>
        {isLoading ? <Loader /> : null}
        {listOfMovies ? (
          listOfMovies.map((movie: any) => (
            <MovieCard
              key={movie.id}
              genre={movie.genres}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              bg={movie.large_cover_image}
              id={movie.id}
            />
          ))
        ) : (
          <div>
            <img className="empty" src={not_found} alt="empty" />
          </div>
        )}
      </div>
    </div>
  );
};
