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
    <div>
      <h2>Login Page</h2>
      {error && <div className="text-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleInputChange}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleInputChange}
            required
            autoComplete="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
