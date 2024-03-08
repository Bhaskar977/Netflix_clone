import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovie from '../hooks/useUpcomingMovie';

const Browse = () => {
  const { user } = useSelector((store) => store.app);
  // const { toggle } = useSelector((store) => store.movie);
  // console.log(toggle);
  const navigate = useNavigate();

  // From Custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovie();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <MainContainer />
      <MovieContainer />
    </div>
  );
};

export default Browse;
