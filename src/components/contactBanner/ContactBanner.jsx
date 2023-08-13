import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import contactPattern from "../../assets/bg-pattern-home-6-about-5.svg";

import "./contactBanner.scss";

const ContactBanner = () => {
  const navigate = useNavigate();

  const handleNavigate = (target) => {
    navigate(`/${target}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-contact-wrapper">
      <h2 className="home-contact-header">Ready to get started?</h2>
      <Button
        buttonText="contact us"
        onClick={() => handleNavigate("contact")}
        extraClass="home-contact-button"
      />

      <div className="contact-bottom-image-wrapper">
        <img src={contactPattern} alt="pattern" />
      </div>
    </div>
  );
};

export default ContactBanner;
