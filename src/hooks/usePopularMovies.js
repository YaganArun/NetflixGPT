import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION, URL } from "../utils/constants";
import { addPopularMovies } from "../slice/moviesSlice";

export default function usePopularMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  async function fetchPopularMovies() {
    const response = await fetch(URL.getPopularMovies, API_OPTION.movieApi);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  }
}
