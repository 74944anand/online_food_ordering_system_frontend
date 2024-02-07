import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedProps {
  Component: React.ComponentType<any>;
  isAuthenticated: boolean;
}

const Protected = (props: ProtectedProps) => {
  const { Component, isAuthenticated } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("user");
    console.log("navigated");

    if (!login) {
      navigate("/login");
    }
  }, [isAuthenticated]);
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
