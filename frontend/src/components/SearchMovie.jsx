import axios from 'axios';
import React, { useState } from 'react';
import { Search_Movie_Url, options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchMovieName } = useSelector((store) => store.search);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${Search_Movie_Url}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res.data);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie('');
  };

  return (
    <>
      <div className='flex justify-center pt-[10%] w-[100%]'>
        <form onSubmit={handleSubmit} className='w-[50%]'>
          <div className='flex justify-between shadow-md p-2 border-gray-200 rounded-lg w-[100%]'>
            <input
              className='w-full outline-none rounded-md text-lg'
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              type='text'
              placeholder='Search Movies...'
            />
            <button className='bg-red-800 text-white rounded-md px-4 py-2 '>
              {isLoading ? 'Loading...' : 'Search'}
            </button>
          </div>
        </form>
      </div>
      <MovieList title={movieName} searchMovie={true} movie={searchMovieName} />
    </>
  );
};

export default SearchMovie;
