import React from "react";
import "./Button.css";

const Button = ({ text, variant }) => {
  const buttonClass = variant === 'blue' ? 'btn-blue' : 'btn-white';
  return <button className={buttonClass}>{text}</button>;
};

export default Button;
