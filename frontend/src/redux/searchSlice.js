import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    movieName: null,
    searchMovieName: null,
  },
  reducers: {
    //actions
    setSearchMovieDetails: (state, action) => {
      const { searchMovie, movies } = action.payload;
      state.movieName = searchMovie;
      state.searchMovieName = movies;
    },
  },
});

export const { setSearchMovieDetails } = searchSlice.actions;

export default searchSlice.reducer;
