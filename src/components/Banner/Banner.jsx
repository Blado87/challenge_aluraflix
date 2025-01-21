import React from "react";
import "./Banner.css";
import Card from "../Card/Card";

function Banner() {
  return (
    <div className="banner patron">
      <div className="banner__content">
        <h1 className="banner__title">Front End</h1>
        <h2 className="banner__subtitle">Challenge React</h2>
        <p className="banner__description">
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder aplicar
          todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className="banner__image">
      <Card
        logo={<i class="bi bi-filetype-html"></i>}
        title="¿Qué es HTML?"
        description="Aprende los fundamentos."
      />
      </div>
    </div>
  );
}

export default Banner;
