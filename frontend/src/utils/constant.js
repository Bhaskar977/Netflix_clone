export const API_END_POINT = 'http://localhost:4000/api/v1/user';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzhhYTgxZmQ3ZGMxYWYwNzI0NGM5NWM5YjdlMjg4YiIsInN1YiI6IjY1ZThlOTBhNzM5MGMwMDE0OWM3N2Y2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsI0OLr1oSRNzeKOiUw2pfgLR4FmPU4yknlBOuZkjyk',
  },
};

export const Search_Movie_Url =
  'https://api.themoviedb.org/3/search/movie?query=';

export const Now_playing_Movie =
  'https://api.themoviedb.org/3/movie/now_playing';

export const Popular_Movie = 'https://api.themoviedb.org/3/movie/popular';

export const Top_Rated_Movie = 'https://api.themoviedb.org/3/movie/top_rated';

export const Upcoming_Movie = 'https://api.themoviedb.org/3/movie/upcoming';

export const TMDB_IMG_Url = 'https://image.tmdb.org/t/p/w500';
