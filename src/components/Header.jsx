import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./CartDetails";
import { MovieContext } from "../context/MovieContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  // MovieContext data
  const { cartData } = useContext(MovieContext);
  // ThemeContext data
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  //state for cart on off
  const [showCart, setShowCart] = useState(false);
  //function for opening cart
  function handleOpenCart() {
    setShowCart(true);
  }

  //function for closing cart
  function handleCloseCart() {
    setShowCart(false);
  }

  return (
    <header>
      {showCart && <CartDetails onClose={handleCloseCart} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setThemeMode(!themeMode)}
            >
              <img
                src={themeMode ? Sun : Moon}
                width="24"
                height="24"
                alt="moon"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleOpenCart}
            >
              <img
                src={ShoppingCart}
                width="24"
                height="24"
                alt="shopping-cart"
              />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
