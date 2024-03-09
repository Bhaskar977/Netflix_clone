import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRated: null,
    upcomingMovie: null,
    toggle: false,
    trailerMovie: null,
    open: false,
    id: '',
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
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setOpenDetails: (state, action) => {
      state.open = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovie,
  getUpcomingMovie,
  getToggle,
  getTrailerMovie,
  setOpenDetails,
  getId,
} = movieSlice.actions;
export default movieSlice.reducer;
