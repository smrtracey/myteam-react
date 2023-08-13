import React from "react";

import theVerge from "../../../assets/logo-the-verge.png";
import theJakartaPost from "../../../assets/logo-jakarta-post.png";
import theGuardian from "../../../assets/logo-the-guardian.png";
import techRadar from "../../../assets/logo-tech-radar.png";
import gadgetsNow from "../../../assets/logo-gadgets-now.png";

import clientsPattern from "../../../assets/bg-pattern-about-4.svg";
const AboutClients = () => {
  return (
    <div className="about-clients-wrapper">
      <img
        src={clientsPattern}
        alt="bg-pattern-about-4Pattern"
        className="clients-pattern"
      />
      <h2 className="clients-header">Some of our clients</h2>

      <div className="client-logo-wrapper">
        <img src={theVerge} alt="theVerge" />
        <img src={theJakartaPost} alt="theJakartaPost" />
        <img src={theGuardian} alt="theGuardian" />
        <img src={techRadar} alt="techRadar" />
        <img src={gadgetsNow} alt="gadgetsNow" />
      </div>
    </div>
  );
};

export default AboutClients;
