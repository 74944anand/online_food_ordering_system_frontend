import React from "react";
import landingPageImg from "../assets/landingPageImg1.png";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div id="landingPage">
      <div>
        <h1 id="headLine">
          "Get Delicious Food Delivered <br />{" "}
          <span id="span1"> To Your Doorstep in Minutes!"</span>
        </h1>

        <h3 className="desc">
          Welcome to NoWait, your go-to destination for delicious meals
          delivered straight to your doorstep.
        </h3>
        <h3 className="desc">
          "Our mission is to provide convenient, fast, and high-quality food
          delivery service to customers, enhancing their dining experience from
          the comfort of their homes."
        </h3>

        <button
          className="btn"
          type="button"
          onClick={() => navigate("/login")}
        >
          Order Now
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => navigate("/signup")}
        >
          SigUp
        </button>
      </div>
      <div>
        <img id="image1" src={landingPageImg} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
