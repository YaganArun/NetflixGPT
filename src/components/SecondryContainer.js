import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondryContainer() {
  const movies = useSelector((store) => store.movies);
  if (
    !movies.nowPlayingMovies ||
    !movies.popularMovies ||
    !movies.upcomingMovies
  )
    return; // early return
  return (
    <div className="p-8 mx-4  -mt-30 bg-transparent">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <div className="mt-8">
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      </div>
      <div className="mt-8">
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
}
