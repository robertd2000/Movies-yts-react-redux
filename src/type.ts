export type InitialStateType = {
  list: MovieData[];
  currentPage: number;
  totalPages: number;
  searchedMovie: string;
  isLoading: boolean;
  curretMovieDetails: MovieData;
  curretMovieSuggestions: CurretMovieSuggestionsType[];
};

export type MovieData = {
  background_image: string;
  date_uploaded: string;
  description_full: string;
  download_count: number;
  genres: string[];
  large_cover_image: string;
  rating: number;
  runtime: number;
  title: string;
  year: number;
};

export type CurretMovieSuggestionsType = {
  title: string;
  medium_cover_image: string;
  id: number;
};

export type RootReducer = {
  reducer: InitialStateType;
};

export type MovieCardType = {
  genre: string[];
  title: string;
  year: number;
  rating: number;
  bg: string;
  id: number;
};
