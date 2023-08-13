import React from "react";
import aboutTopperImage from "../../../assets/bg-pattern-about-1-mobile-nav-1.svg";

const AboutTopper = () => {
  return (
    <div className="about-topper">
      <div className="about-topper-text">
        <h2>About</h2>
        <p>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>

        <div className="about-topper-image">
          <img src={aboutTopperImage} alt="about-pattern" />
        </div>
      </div>
    </div>
  );
};

export default AboutTopper;
