import React from "react";
import "./button.scss";

const Button = ({ buttonText, onClick, variant, extraClass = "" }) => {
  return (
    <button
      className={`button ${variant}-button ${extraClass}`}
      onClick={(e) => onClick(e)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
