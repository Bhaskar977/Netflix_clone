import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import SearchMovie from './SearchMovie';

const Browse = () => {
  const { user, toggle } = useSelector(
    (store) => ({
      user: store.app.user,
      toggle: store.movie.toggle,
    }),
    shallowEqual
  );
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
  }, [user, navigate]);

  return (
    <div>
      {toggle ? (
        <SearchMovie />
      ) : (
        <>
          <MainContainer />
          <MovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
