import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <h1 className="title">My Portfolio</h1>
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/works" className="link">Works</Link>
        <Link to="/contact" className="link">Contact</Link>
      </nav>
    </header>
  );
}


export default Header;