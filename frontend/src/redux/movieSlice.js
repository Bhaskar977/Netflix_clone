import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRated: null,
    upcomingMovie: null,
    toggle: false,
  },
  reducers: {
    //actions
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRated = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    getToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovie,
  getUpcomingMovie,
  getToggle,
} = movieSlice.actions;
export default movieSlice.reducer;
