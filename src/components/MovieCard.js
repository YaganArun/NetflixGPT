export default function MovieCard({ img }) {
  return (
    <div className="w-52 m-2 hover:border shadow-xl cursor-pointer">
      <img
        className=" rounded-lg"
        src={"https://image.tmdb.org/t/p/w780/" + img}
        alt="movie card"
      />
    </div>
  );
}
