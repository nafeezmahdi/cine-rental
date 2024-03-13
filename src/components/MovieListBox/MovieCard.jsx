/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImageUrl } from "../../utils/CineUtility.js";
import Rating from "./Rating.jsx";
import MovieDetailsModal from "./MovieDetailsModal.jsx";
import { MovieContext } from "../../context/MovieContext.js";
import { toast } from "react-toastify";

export default function MovieCard({ movie }) {
  //collecting context api
  const { state, dispatch } = useContext(MovieContext);
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
  // function for adding movie to cart
  function handleAddToCart(evnt, movie) {
    evnt.stopPropagation();
    // function for
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "Add_To_Cart",
        payload: {
          ...movie,
        },
      });
    } else {
      console.log(`The movie ${movie.title} has been added to cart already`);
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedModal}
          onClose={handleModalClose}
          onAddCart={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieShowModal(movie)}>
          <img
            className="w-full object-cover h-[470px]"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(evnt) => handleAddToCart(evnt, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
