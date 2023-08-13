import React from "react";
import { useNavigate } from "react-router-dom";

import myteamLogo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";

import "./footer.scss";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (target) => {
    navigate(`/${target}`);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="main-footer">
      <img src={myteamLogo} alt="myteam" className="footer-main-logo" />
      <nav className="footer-nav">
        <ul>
          <li onClick={() => handleNavigate("")}>home</li>
          <li onClick={() => handleNavigate("about")}>about</li>
        </ul>
      </nav>

      <div className="footer-address">
        <p>987 Hillcrest Lane</p>
        <p>Irvine,CA</p>
        <p>California 92714</p>
        <p>Call Us : 949-833-7432</p>
      </div>

      <div className="footer-icons-wrapper">
        <img src={facebook} alt="facebook" />
        <img src={pinterest} alt="pinterest" />
        <img src={twitter} alt="twitter" />
      </div>

      <p>Copyright 2020. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
