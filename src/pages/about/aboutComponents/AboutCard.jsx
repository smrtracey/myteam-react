import React, { useState } from "react";
import "./aboutCard.scss";

import nikita from "../../../assets/avatar-nikita.jpg";
import christian from "../../../assets/avatar-christian.jpg";
import cruz from "../../../assets/avatar-cruz.jpg";
import drake from "../../../assets/avatar-drake.jpg";
import griffin from "../../../assets/avatar-griffin.jpg";
import aden from "../../../assets/avatar-aden.jpg";

import cross from "../../../assets/icon-cross.svg";

import twitter from "../../../assets/icon-twitter.svg";
import linkedIn from "../../../assets/icon-linkedin.svg";

const AboutCard = ({ data }) => {
  const images = {
    nikita: nikita,
    christian: christian,
    cruz: cruz,
    drake: drake,
    griffin: griffin,
    aden: aden,
  };

  const { name, image, quote, jobPosition } = data;

  const [showQuote, setShowQuote] = useState(false);

  const handleClick = () => {
    setShowQuote(!showQuote);
  };

  return (
    <div className={`about-card ${showQuote && "darken-about-card"}`}>
      {!showQuote ? (
        <>
          <img src={images[image]} alt="person" className="about-card-avatar" />
          <span className="about-card-name">{name}</span>
          <span className="job-position">{jobPosition}</span>
        </>
      ) : (
        <>
          <span className="about-card-name">{name}</span>
          <span className="about-card-quote">"{quote}"</span>
          <div className="about-card-socials">
            <img src={twitter} alt="twitter" />
            <img src={linkedIn} alt="linkedIn" />
          </div>
        </>
      )}

      <div
        className={`${showQuote && "show-quote-button"} plus-button`}
        onClick={() => handleClick()}
      >
        <img src={cross} alt="details" />
      </div>
    </div>
  );
};

export default AboutCard;
