import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <div>
      <h1 className="text-2xl font-thin text-white">{title}</h1>
      <div className="flex overflow-x-hidden">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} img={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}
