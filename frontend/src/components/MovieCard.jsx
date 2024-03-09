import React from 'react';
import { TMDB_IMG_Url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getId, setOpenDetails } from '../redux/movieSlice';

const MovieCard = ({ posterpath, movieId }) => {
  const dispatch = useDispatch();
  if (posterpath === null) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpenDetails(true));
  };
  return (
    <div onClick={handleOpen} className='w-48 px-2'>
      <img src={`${TMDB_IMG_Url}/${posterpath}`} alt='movie-banner' />
    </div>
  );
};

export default MovieCard;
