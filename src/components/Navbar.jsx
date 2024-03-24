import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextApp } from "../App"

const Navbar = () => {
  const { liked } = useContext(ContextApp);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link> | <Link to="/favoritos">Favoritos</Link>
      <span className="favorite-count">{liked.length}</span>
    </nav>
  );
};

export default Navbar