import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <div className='bg-black'>
      <div className='-mt-44 relative z-10'>
        <MovieList title='Popular Movies' movie={movie.popularMovies} />
        <MovieList title='Now Playing Movies' movie={movie.nowPlayingMovies} />
        <MovieList title='Top Rated Movies' movie={movie.topRated} />
        <MovieList title='Upcoming Movies' movie={movie.upcomingMovie} />
      </div>
    </div>
  );
};

export default MovieContainer;
