import axios from 'axios';
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';
import { useEffect } from 'react';

const useMovieIdUrl = async (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieById = async () => {
      try {
        let res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        const trailer = res?.data?.results.filter((item) => {
          return item.type === 'Trailer';
        });
        dispatch(
          getTrailerMovie(trailer.length > 0 ? trailer : res?.data?.results)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  }, []);
};

export default useMovieIdUrl;
