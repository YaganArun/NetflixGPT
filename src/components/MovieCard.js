export default function MovieCard({ img }) {
  return (
    <div className=" w-16 md:w-28 lg:w-40 hover:border shadow-xl cursor-pointer">
      <img
        className=" rounded-lg"
        src={"https://image.tmdb.org/t/p/w780/" + img}
        alt="movie card"
      />
    </div>
  );
}
