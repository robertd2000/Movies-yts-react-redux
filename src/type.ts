export type InitialStateType = {
  list: any;
  currentPage: number;
  totalPages: number;
  searchedMovie: string;
  isLoading: boolean;
  curretMovieDetails: any;
};

export type RootReducer = {
  reducer: InitialStateType;
};
