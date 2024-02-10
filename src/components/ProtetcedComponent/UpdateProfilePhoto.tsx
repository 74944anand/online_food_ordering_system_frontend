import { useState, ChangeEvent, FormEvent } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateProfilePhoto = () => {
  const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!file) {
        console.error("No file selected.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:8080/user/updateProfilePhoto",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response.data); // Profile photo updated successfully
      navigate("/user");
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Update Photo</button>
      </form>
    </div>
  );
};

export default UpdateProfilePhoto;
