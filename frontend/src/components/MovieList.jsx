import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movie }) => {
  return (
    <div className='px-4'>
      <h1 className='text-3xl py-3 text-white'>{title}</h1>
      <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex item-center'>
          {movie?.map((el) => {
            return <MovieCard key={el.id} posterpath={el.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
