import { useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context/MovieContext";
import { ThemeContext } from "./context/ThemeContext";
import { CartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // state for collecting cart data
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [themeMode, setThemeMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
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
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
