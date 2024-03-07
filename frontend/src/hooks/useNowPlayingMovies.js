import axios from "axios";
import { Now_playing_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Now_playing_Movie, options);
    dispatch(getNowPlayingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useNowPlayingMovies;
