import React from "react";
import "./Button.css";

const STYLES = [
  "btn--primary",
  "btn--primary-send",
  "btn--outline",
  "btn--outline2",
  "btn--outline3",
  "btn--bigblueprimary",
  "btn--bigprimary",
];
const SIZES = ["btn--medium", "btn--large", "btn--xlarge"];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
  );
};
