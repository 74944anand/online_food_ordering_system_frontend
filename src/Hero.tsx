import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <div id="container">
        <div id="heroBody">
          <h1 className="heroHeading">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="heroHeading">
            Food <span className="text-orange-500">Delivered</span>
          </h1>
        </div>
        <img
          id="heroImage"
          src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default Hero;
