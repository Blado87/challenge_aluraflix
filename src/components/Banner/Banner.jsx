import React from "react";
import "./Banner.css"; // Importamos los estilos
import Button from "../Button/Button"; // Importamos el componente Button

function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Front End</h1>
        <h2 className="banner__subtitle">Challenge React</h2>
        <p className="banner__description">
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder aplicar
          todos los conocimientos adquiridos en la formación React.
        </p>
        <Button text="Nuevo" className="card__button card__edit">Editar</Button>
      </div>
      <div className="banner__image">
        <img
          src="/html_css_js.jpg" // Ruta a la imagen dentro de public
          alt="Desarrollador"
          className="banner__img"
        />
      </div>
    </div>
  );
}

export default Banner;
