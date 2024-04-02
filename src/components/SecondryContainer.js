import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondryContainer() {
  const movies = useSelector((store) => store.movies);
  if (!movies.nowPlayingMovies) return;
  return (
    <div className="p-8 ml-4 -mt-60 relative z-20 bg-transparent">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
}
