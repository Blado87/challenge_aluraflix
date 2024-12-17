import React from "react";
import "./Card.css"; // Importamos los estilos
import Button from "../Button/Button"; // Importamos el componente Button

function Card({ imageSrc, title, description, onEdit, onDelete }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card__buttons">
          <Button
          text="Borrar"
            label="Editar"
            onClick={onEdit} // Acción que se ejecuta cuando se hace clic
            className="card__button card__edit"
          />
          <Button
            text="Borrar"
            onClick={onDelete} // Acción que se ejecuta cuando se hace clic
            className="card__button card__delete"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

