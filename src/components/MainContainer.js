import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  if (!movies.nowPlayingMovies) {
    // early return, waiting for data to be fetched from useEffect
    return;
  }
  const { title, overview, id } = movies.nowPlayingMovies[0];
  return (
    <div>
      <div className="main-container absolute top-1/3 z-10">
        <VideoTitle title={title} overview={overview} />
      </div>
      <div className="main-container absolute top-0 opacity-50">
        <VideoBackground videoId={id} />
      </div>
    </div>
  );
}
