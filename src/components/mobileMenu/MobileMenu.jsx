import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";
import closeIcon from "../../assets/icon-close.svg";
import menuPattern from "../../assets/bg-pattern-about-1-mobile-nav-1.svg";
import "./mobileMenu.scss";

const MobileMenu = ({ handleMenuClick }) => {
  const navigate = useNavigate();

  const closeMenu = () => {
    handleMenuClick();
  };

  const handleNavigate = (target) => {
    navigate(`/${target}`);
    closeMenu();
  };

  return (
    <div className="mobile-menu-wrapper">
      <div className="mobile-menu-content">
        <header>
          <img src={closeIcon} alt="close" onClick={() => closeMenu()} />
        </header>
        <nav>
          <ul>
            <li onClick={() => handleNavigate("")}>home</li>
            <li onClick={() => handleNavigate("about")}>about</li>
          </ul>
        </nav>

        <Button
          buttonText="contact us"
          onClick={() => handleNavigate("contact")}
          extraClass="menu-contact-button"
        />

        <img src={menuPattern} alt="close" className="mobile-menu-pattern" />
      </div>
    </div>
  );
};

export default MobileMenu;
