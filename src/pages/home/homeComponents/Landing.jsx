import React from "react";
import homeImage2 from "../../../assets/bg-pattern-home-2.svg";

const Landing = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="landing-text">
        <h2>
          Find the best <span className="highlight-span">talent</span>
        </h2>

        <p className="small-text">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <div className="home-image-wrapper">
        <img src={homeImage2} alt="pattern" />
      </div>
    </div>
  );
};

export default Landing;
