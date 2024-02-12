import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginLogout/LoginPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SignupPage from "./components/loginLogout/SignUp";
import Protected from "./components/Protected";
import Orders from "./components/ProtetcedComponent/Orders";
import Cart from "./components/ProtetcedComponent/Cart";
import Profile from "./components/ProtetcedComponent/Profile";
import { logout } from "./components/services/AuthService";
import LandingPage from "./components/LandingPage";
import UpdateProfilePhoto from "./components/ProtetcedComponent/UpdateProfilePhoto";

const App = () => {
  const user = localStorage.getItem("user");
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  const handleLogout = async () => {
    const logoutfun = await logout();
    if (logoutfun) {
      console.log("inside app");
      setIsAuthenticated(false);
    }
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <Protected
                isAuthenticated={isAuthenticated}
                Component={HomePage}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Protected isAuthenticated={isAuthenticated} Component={Orders} />
            }
          />
          <Route
            path="/cart"
            element={
              <Protected isAuthenticated={isAuthenticated} Component={Cart} />
            }
          />
          <Route
            path="/user"
            element={
              <Protected
                isAuthenticated={isAuthenticated}
                Component={Profile}
              />
            }
          />
          <Route
            path="/updateimage"
            element={
              <Protected
                isAuthenticated={isAuthenticated}
                Component={UpdateProfilePhoto}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
