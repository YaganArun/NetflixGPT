import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies);
  useNowPlayingMovies();
  if (!movies.nowPlayingMovies) {
    // early return, waiting for data to be fetched from useEffect
    return;
  }
  const { title, overview, id } = movies.nowPlayingMovies[11];
  return (
    <div className="relative">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
}
