import React from "react";
import AboutTopper from "./aboutComponents/AboutTopper";
import AboutDirectors from "./aboutComponents/AboutDirectors";
import AboutClients from "./aboutComponents/AboutClients";
import ContactBanner from "../../components/contactBanner/ContactBanner";

import "./about.scss";
const About = () => {
  return (
    <div className="about-page-wrapper">
      <AboutTopper />
      <AboutDirectors />
      <AboutClients />
      <ContactBanner />
    </div>
  );
};

export default About;
