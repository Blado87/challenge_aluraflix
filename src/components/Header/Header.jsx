import React from "react";
import Button from "../Button/Button"; // Importamos el botón reutilizable
import "./Header.css"; // Importamos los estilos del Header

function Header() {
  return (
    <header className="header">
      <div className="header__logo">AluraFlix</div>
      <div className="header__buttons">
        <Button text="Home" styleType="default" />
        <Button text="Nuevo Video" styleType="success" />
      </div>
    </header>
  );
}

export default Header;
