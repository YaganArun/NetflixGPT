import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <div>
      <h1 className="text-2xl font-thin text-white">{title}</h1>
      <div className="flex">
        <div className="flex overflow-x-hidden ">
          {movies.map((movie, idx) => (
            <div className="mx-2">
              <MovieCard key={idx} img={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
