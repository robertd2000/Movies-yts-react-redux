import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from '../api/api';

const initialState = {
  list: [],
  currentPage: 1,
  totalPages: 0,
  searchedMovie: '',
  isLoading: false,
  curretMovieDetails: {},
};

export const getMoviesList = createAsyncThunk(
  'movies/getMoviesList',
  async ({ title, page = 1 }: { title: string; page: number }) => {
    const response = await Api.getMoviesList(title, page);
    return response;
  }
);

export const getMoviesDetails = createAsyncThunk(
  'movies/getMoviesDetails',
  async (id: number) => {
    const response = await Api.getMovieDetails(id);
    return response;
  }
);

const moviesListSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMoviesList.fulfilled, (state, action) => {
        state.list = action.payload.data.movies;
        state.searchedMovie = action.meta.arg.title;
        state.totalPages = action.payload.data.movie_count;
        state.currentPage = action.meta.arg.page;
        state.isLoading = false;
      })
      .addCase(getMoviesDetails.pending, () => {})
      .addCase(getMoviesDetails.fulfilled, (state, action: any) => {
        state.curretMovieDetails = action.payload.data.movie;
      });
  },
});

export default moviesListSlice.reducer;
