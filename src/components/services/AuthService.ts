// AuthService.ts
import axios from "axios";
import { useState } from "react";
export const login = async (username: string, password: string) => {
  // Send login request to the server
  const [form, setForm] = useState({ email: username, password: password });
  try {
    const response = await axios.post("http://localhost:8080/login", form);

    const { token } = response.data;

    localStorage.setItem("token", token);
  } catch (error) {
    alert("Invalid email or password");
    return false;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("http://localhost:8080/user/logout");

    localStorage.removeItem("token");
  } catch (error) {
    alert("Logout Failed");
  }
  alert("User Logged out");
};
