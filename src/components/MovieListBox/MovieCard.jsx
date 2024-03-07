/* eslint-disable react/prop-types */
import { useState } from "react";
import { getImageUrl } from "../../utils/CineUtility.js";
import Rating from "./Rating.jsx";
import MovieDetailsModal from "./MovieDetailsModal.jsx";

export default function MovieCard({ movie }) {
  // state for modal on off
  const [showModal, setShowModal] = useState(false);
  // state for modal data
  const [selectedModal, setSelectedModal] = useState(null);

  //function for closing detailsModal
  function handleModalClose() {
    setSelectedModal(null);
    setShowModal(false);
  }
  // function for showing detailsModal
  function handleMovieShowModal(movie) {
    setSelectedModal(movie);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedModal} onClose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieShowModal(movie)}>
          <img
            className="w-full object-cover"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
