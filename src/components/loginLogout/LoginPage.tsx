import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/AuthService";

interface LoginForm {
  email: string;
  password: string;
}
interface NavbarProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage = ({ setIsAuthenticated }: NavbarProps) => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    let login = localStorage.getItem("user");
    if (login) {
      navigate("/");
    }
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = form;
    console.log(form);

    const token = await login(email, password);
    if (token) {
      setIsAuthenticated(true);
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div id="loginForm">
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <div id="formData">
          {error && <div id="errorText">{error}</div>}
          <div>
            <label htmlFor="email">Email: </label>
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              required
              placeholder="Enter Email"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleInputChange}
              required
              placeholder="Enter Password"
              autoComplete="password"
            />
          </div>
          <button id="loginbtn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
