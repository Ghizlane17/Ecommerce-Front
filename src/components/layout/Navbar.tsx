import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Ecommerce
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/products">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;