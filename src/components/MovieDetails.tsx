import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMoviesDetails } from '../redux/reducer';
import { RootReducer } from '../type';
import Img from './Img';
import preloader from '../assets/empty.png';
import s from './MovieDetails.module.css';
import { Comments } from './Comments';

const MovieDetailsData = (props: any) => {
  let movieId = props.match.params.id;
  const dispatch = useDispatch();
  const movie = useSelector(
    (state: RootReducer) => state.reducer.curretMovieDetails
  );
  useEffect(() => {
    dispatch(getMoviesDetails(movieId));
  }, []);

  const {
    background_image,
    date_uploaded,
    description_full,
    download_count,
    genres,
    large_cover_image,
    rating,
    runtime,
    title,
    year,
    yt_trailer_code,
  } = movie;

  return (
    <>
      <div
        className={s.wrapper}
        style={{ backgroundImage: `url(${background_image})` }}
      >
        <div className={s.container}>
          <div className={s.img}>
            <Img img={large_cover_image} preloader={preloader} />
          </div>
          <div className={s.movieInfo}>
            <div className={s.title}>{title}</div>
            <div>{year}</div>
            <div>
              {genres
                ? genres.map((genre: string) => (
                    <span key={genre}>{genre}/</span>
                  ))
                : ''}
            </div>
            <div className={s.rating}>
              <img
                src="https://yts.mx/assets/images/website/logo-imdb.svg"
                alt="imdb"
              />
              <span>&#9733; {rating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.synopsis}>
        <h3>Synopsis</h3>
        <span>{description_full}</span>
        <div className={s.movieTechData}>
          <div>Download count: {download_count}</div>
          <div>Runtime: {runtime}</div>
          <div>Uploaded date: {date_uploaded}</div>
        </div>
      </div>
      <div>
        <Comments id={movieId} />
      </div>
    </>
  );
};

export const MovieDetails = withRouter(MovieDetailsData);
