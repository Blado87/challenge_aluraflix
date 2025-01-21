import React from "react";
import Button from "../Button/Button";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">AluraFlix</div>
      <div className="header__buttons">
      <Button text="HOME" variant="blue" />
      <Button text="NUEVO VIDEO" variant="white" />
      </div>
    </header>
  );
}

export default Header;
