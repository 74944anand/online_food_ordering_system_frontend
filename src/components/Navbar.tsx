import { useEffect } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout?: () => void; // Make onLogout prop optional
}

const Navbar = ({ isAuthenticated, onLogout }: NavbarProps) => {
  const handleLogout = () => {
    if (onLogout) {
      console.log("nav-logout");
      onLogout();
    }
  };
  useEffect(() => {}, [isAuthenticated]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="logo">
          <Link to="/">Your Logo</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {isAuthenticated ? (
            <>
              <Link className="nav-item" to="/orders">
                Orders
              </Link>
              <Link className="nav-item" to="/cart">
                Cart
              </Link>
              <Link className="nav-item" to="/profile">
                Profile
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="nav-item" to="/login">
                Login
              </Link>
              <Link className="nav-item" to="/signup">
                SignUp
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
