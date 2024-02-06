import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./components/loginLogout/LoginPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import SignupPage from "./components/loginLogout/SignUp";

const App = () => {
  const token = localStorage.getItem("token");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Perform logout actions
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute
                element={<HomePage />}
                isAuthenticated={!!token} // Use token to check authentication
                redirectTo="/login"
              />
            }
          />
          {/* Define other private routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
