import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface SignupForm {
  email: string;
  contactNo: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SignupForm>({
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [error, setError] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/signup", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      alert("User alredy Registered");
    }
    alert("Registration Successful!");
    console.log("Form submitted:", form);
    navigate("/login");
  };

  return (
    <div id="loginForm">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div id="formData">
          <div>
            <label>Email:</label>
            <div className="input">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Contact Number:</label>
            <div className="input">
              <input
                type="text"
                name="contactNo"
                value={form.contactNo}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <div>
            <label>Password:</label>
            <div className="input">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Confirm Password:</label>
            <div className="input">
              <input
                type="text"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button id="loginbtn" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
