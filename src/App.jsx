import { Route, Routes } from "react-router-dom"
import { useState, createContext } from "react"
import Navbar from "./components/Navbar"
import Favorites from "./views/Favorites"
import Home from "./views/Home"
import Photos from "../public/photos.json"

export const ContextApp = createContext()

const [liked, SetLiked] = useState()

const App = () => {
  return (
    <ContextApp.Provider value={{
      liked, SetLiked
    }}>
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </div>
    </ContextApp.Provider>
  );
};
export default App;
