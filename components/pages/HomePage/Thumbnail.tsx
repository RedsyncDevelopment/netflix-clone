import Image from "next/image";
import React from "react";
import useStore from "../../../states/store/useStore";
import { Movie } from "../../../typings";

interface ThumbnailProps {
  movie: Movie;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ movie }) => {
  const setShowModal = useStore((state) => state.setShowModal);
  const setCurrentMovie = useStore((state) => state.setMovie);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px]"
      onClick={() => {
        setShowModal(true);
        setCurrentMovie(movie);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt={movie.title}
      />
    </div>
  );
};

export default Thumbnail;
