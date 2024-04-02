import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../slice/moviesSlice";
import { URL, API_OPTION } from "../utils/constants";

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  async function fetchNowPlayingMovies() {
    const response = await fetch(URL.getNowPlayingMovies, API_OPTION.movieApi);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  }
}
