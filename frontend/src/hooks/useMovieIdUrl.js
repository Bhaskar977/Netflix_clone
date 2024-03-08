import axios from 'axios';
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovie } from '../redux/movieSlice';

const useMovieIdUrl = async (movieId) => {
  const dispatch = useDispatch();
  try {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );
    const trailer = res?.data?.results.filter((item) => {
      return item.type === 'Trailer';
    });
    console.log(trailer);
    dispatch(
      getTrailerMovie(trailer.length > 0 ? trailer : res?.data?.results)
    );
  } catch (error) {
    console.log(error);
  }
};

export default useMovieIdUrl;
