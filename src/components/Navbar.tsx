import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
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
    <nav className="navBar">
      <div className="navItem">
        <div>
          <Link to="/">
            <img id="logo" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <a href="/" id="brandName">
            NoWait
          </a>
        </div>
        <div className="navdiv">
          <ul>
            {isAuthenticated ? (
              <div className="navTab">
                <div>
                  <Link className="navLink" to="/orders">
                    Orders
                  </Link>
                </div>
                <div>
                  <Link className="navLink" to="/cart">
                    Cart
                  </Link>
                </div>
                <div>
                  <Link className="navLink" to="/user">
                    Profile
                  </Link>
                </div>

                <Link className="navLink" onClick={handleLogout} to="/login">
                  Logout
                </Link>
              </div>
            ) : (
              <div className="navTab">
                <Link className="navLink" to="/login">
                  Login
                </Link>

                <Link className="navLink" to="/signup">
                  SignUp
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
