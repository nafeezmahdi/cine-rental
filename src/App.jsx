import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context/MovieContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  // state for collecting cart data
  const [cartData, setCartData] = useState([]);
  const [themeMode, setThemeMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <div className={`h-full w-full ${themeMode ? "dark" : ""}`}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieList />
              </div>
            </main>
            <Footer />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
