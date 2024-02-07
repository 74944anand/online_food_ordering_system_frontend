import axios from "axios";

export const login = async (email: string, password: string) => {
  // Send login request to the server
  console.log("inside login fuction");
  const form = {
    email: email,
    password: password,
  };
  const data = JSON.stringify(form);

  try {
    const response = await axios.post("http://localhost:8080/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = {
      user: response.data.email,
      token: response.data.token,
      role: response.data.collection[0].authority,
    };
    const user = JSON.stringify(info);
    localStorage.setItem("user", user);

    return true;
  } catch (error) {
    alert("Invalid email or password");
    return false;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("http://localhost:8080/user/logout");
    console.log("inside auth");
    localStorage.removeItem("user");
  } catch (error) {
    alert("Logout Failed");
    return false;
  }
  alert("User Logged out");
  return true;
};
