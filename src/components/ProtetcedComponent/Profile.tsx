import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    profilePhoto: null, // Initialize sellerBrandImage as null
  });
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Initialize useHistory hook

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
        console.log(response.data);

        setUserData(userData);
        setNewFirstName(userData.firstName);
        setNewLastName(userData.lastName);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setNewFirstName(value);
    } else if (name === "lastName") {
      setNewLastName(value);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setNewFirstName(userData.firstName);
    setNewLastName(userData.lastName);
  };

  const updateProfile = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        "http://localhost:8080/user/updateName",
        { firstName: newFirstName, lastName: newLastName },
        config
      );
      if (response) {
        console.log("Profile updated successfully");
        setUserData((prevUserData) => ({
          ...prevUserData,
          firstName: newFirstName,
          lastName: newLastName,
        }));
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageClick = () => {
    // Redirect to update image page when the image is clicked
    navigate("/updateimage");
  };

  const { firstName, lastName, email, contactNo, profilePhoto } = userData;
  console.log(profilePhoto);

  return (
    <div id="loginForm">
      <div>
        <div id="picture">
          {/* Show the sellerBrandImage if available */}
          {profilePhoto && (
            <img
              className="profilePic"
              src={`data:image/jpeg;base64,${profilePhoto}`} // Assuming sellerBrandImage is a base64 encoded string
              alt="Seller Brand"
              onClick={handleImageClick} // Add onClick handler to handle image click
              style={{ cursor: "pointer" }} // Change cursor to pointer when hovering over the image
            />
          )}
        </div>
        <div id="formData">
          <div>
            <strong>First Name:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="firstName"
                value={newFirstName}
                onChange={handleInputChange}
              />
            ) : (
              <span>{firstName}</span>
            )}
          </div>
          <div>
            <strong>Last Name:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={newLastName}
                onChange={handleInputChange}
              />
            ) : (
              <span>{lastName}</span>
            )}
          </div>
          {isEditing ? (
            <>
              <button className="profilebtn" onClick={updateProfile}>
                Save
              </button>
              <button className="profilebtn" onClick={cancelEdit}>
                Cancel
              </button>
            </>
          ) : (
            <button className="profilebtn" onClick={handleEdit}>
              Edit
            </button>
          )}
          <div>
            <strong>Email:</strong> {email}
          </div>
          <div>
            <strong>Contact Number:</strong> {contactNo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
