import axios from "axios";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    sellerBrandImage: "",
  });
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  const getProfile = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get("http://localhost:8080/user", config);
      if (response) {
        const userData = response.data;
        setUserData(userData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFirstNameChange = (e) => {
    setNewFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setNewLastName(e.target.value);
  };

  const handleEditFirstName = () => {
    setNewFirstName(userData.firstName);
    setIsEditingFirstName(true);
  };

  const handleEditLastName = () => {
    setNewLastName(userData.lastName);
    setIsEditingLastName(true);
  };

  const cancelEdit = () => {
    setNewFirstName("");
    setNewLastName("");
    setIsEditingFirstName(false);
    setIsEditingLastName(false);
  };

  const updateFirstName = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        "http://localhost:8080/api/users/updateFirstName",
        { firstName: newFirstName },
        config
      );
      if (response) {
        console.log("First name updated successfully");
        setUserData((prevUserData) => ({
          ...prevUserData,
          firstName: newFirstName,
        }));
        setIsEditingFirstName(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateLastName = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        "http://localhost:8080/api/users/updateLastName",
        { lastName: newLastName },
        config
      );
      if (response) {
        console.log("Last name updated successfully");
        setUserData((prevUserData) => ({
          ...prevUserData,
          lastName: newLastName,
        }));
        setIsEditingLastName(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { firstName, lastName, email, contactNo, sellerBrandImage } = userData;

  return (
    <div>
      <button onClick={getProfile}>Get Profile</button>
      <div>
        <h2>User Profile</h2>
        <div>
          <strong>First Name:</strong>{" "}
          {isEditingFirstName ? (
            <input
              type="text"
              value={newFirstName}
              onChange={handleFirstNameChange}
            />
          ) : (
            <span>{firstName}</span>
          )}
          {isEditingFirstName ? (
            <>
              <button onClick={updateFirstName}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEditFirstName}>Edit</button>
          )}
        </div>
        <div>
          <strong>Last Name:</strong>{" "}
          {isEditingLastName ? (
            <input
              type="text"
              value={newLastName}
              onChange={handleLastNameChange}
            />
          ) : (
            <span>{lastName}</span>
          )}
          {isEditingLastName ? (
            <>
              <button onClick={updateLastName}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEditLastName}>Edit</button>
          )}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>Contact Number:</strong> {contactNo}
        </div>
        <div>
          <strong>Seller Brand Image:</strong>{" "}
          {sellerBrandImage && (
            <img src={sellerBrandImage} alt="Seller Brand" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
