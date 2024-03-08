import React from 'react';
import { TMDB_IMG_Url } from '../utils/constant';

const MovieCard = ({ posterpath }) => {
  return (
    <div className='w-48 px-2'>
      <img src={`${TMDB_IMG_Url}/${posterpath}`} alt='movie-banner' />
    </div>
  );
};

export default MovieCard;
