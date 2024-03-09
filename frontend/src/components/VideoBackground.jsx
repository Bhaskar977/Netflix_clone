import React from 'react';
import useMovieIdUrl from '../hooks/useMovieIdUrl';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
  const trailer = useSelector((store) => store.movie.trailerMovie);

  useMovieIdUrl(movieId);

  return (
    <div className='w-[vw] overflow-hidden'>
      <iframe
        className={`${bool ? 'w-[100%]' : 'w-screen aspect-video'}`}
        src={`https://www.youtube.com/embed/${trailer?.key}?si=-nlTU8VuVa-BqEjR&autoplay=1`}
        title='YouTube video player'
        frameBorder='0'
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoBackground;
