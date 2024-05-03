import { useDispatch } from "react-redux";
import { API_OPTION, URL } from "../utils/constants";
import { addUpcomingMovies } from "../slice/moviesSlice";
import { useEffect } from "react";

export default function useUpcomingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  async function fetchUpcomingMovies() {
    const response = await fetch(URL.getUpcomingMovies, API_OPTION.movieApi);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  }
}
