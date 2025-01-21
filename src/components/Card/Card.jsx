import React from "react";
import "./Card.css";

const Card = ({ logo, title, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-logo">{logo}</div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-buttons">
          <button className="button-primary"><i class="bi bi-trash-fill"></i> Borrar</button>
          <button className="button-secondary"><i class="bi bi-pencil-fill"></i> Editar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;


