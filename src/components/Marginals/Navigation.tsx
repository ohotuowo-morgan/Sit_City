import { Link } from "react-router-dom";
import "./Navigation.css";


function Navigation() {
  return (
    <header className="header-container">
      <nav className="nav-pill">
        <Link to="#home" className="nav-link active">Home</Link>
        <Link to="#products" className="nav-link">Products</Link>
        <Link to="#about" className="nav-link">About</Link>
        <Link to="#pricing" className="nav-link">Pricing</Link>
        <Link to="#reviews" className="nav-link">Reviews</Link>
      </nav>
    </header>

  );
}

export default Navigation;