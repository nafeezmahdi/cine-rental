/* eslint-disable react/prop-types */
import { useContext } from "react";
import RemoveLogo from "../../assets/remove.svg";
import { getImageUrl } from "../../utils/CineUtility";
import { MovieContext } from "../../context/MovieContext";
export default function CartDetailBox({ movie }) {
  const { cartData, setCartData } = useContext(MovieContext);
  // Function for removing item on cart
  function handleRemoveItem(evnt, itemId) {
    evnt.preventDefault();

    const filteredMovie = cartData.filter((item) => {
      return item.id !== itemId;
    });

    setCartData([...filteredMovie]);
  }
  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <div className="flex items-center gap-4">
        <img
          className="rounded overflow-hidden"
          src={getImageUrl(movie.cover)}
          alt={movie.title}
          width={"50px"}
          height={"50px"}
        />
        <div>
          <h3 className="text-base md:text-xl font-bold">{movie.title}</h3>
          <p className="max-md:text-xs text-[#575A6E]">{movie.genre}</p>
          <span className="max-md:text-xs">${movie.price}</span>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <button
          className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
          onClick={(evnt) => handleRemoveItem(evnt, movie.id)}
        >
          <img className="w-5 h-5" src={RemoveLogo} alt="remove" />
          <span className="max-md:hidden">Remove</span>
        </button>
      </div>
    </div>
  );
}
