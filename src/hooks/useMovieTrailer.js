import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../slice/moviesSlice";

export default function useMovieTrailer(videoId) {
  const dispatch = useDispatch();

  // adds trailer video key to redux store
  useEffect(() => {
    fetchMovieVideos();
  }, []);

  async function fetchMovieVideos() {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      videoId +
      "/videos?language=en-US";
    const response = await fetch(url, API_OPTION.movieApi);
    const data = await response.json();
    const filteredData = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerKey = filteredData[0].key;
    dispatch(addTrailer(trailerKey));
  }
}
