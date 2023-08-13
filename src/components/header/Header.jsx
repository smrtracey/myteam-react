import React, { useState } from "react";
import myteamLogo from "../../assets/logo.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import MobileMenu from "../mobileMenu/MobileMenu";

import "./header.scss";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <div className="main-header">
        <img src={myteamLogo} alt="myteam" />
        <img src={hamburger} alt="menu" onClick={() => handleMenuClick()} />
      </div>

      {showMobileMenu && <MobileMenu handleMenuClick={handleMenuClick} />}
    </>
  );
};

export default Header;
