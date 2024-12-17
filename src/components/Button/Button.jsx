import React from "react";
import "./Button.css"; // Importa estilos comunes para el botón

function Button({ text, onClick, styleType = "default", disabled = false, type = "button" }) {
  return (
    <button
      className={`button ${styleType}`} // Clases dinámicas según styleType
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
