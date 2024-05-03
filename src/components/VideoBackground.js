import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

export default function VideoBackground({ videoId }) {
  useMovieTrailer(videoId);
  const trailerVideoKey = useSelector((store) => store.movies.trailer);
  return (
    <div>
      <iframe
        className="w-[100vw] h-[100vh] aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey +
          "?si=NPei45Oy4gBqRJ2e?&autoplay=1&mute=1&loop=1&controls=0"
        }
        height={360}
        width={360}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
