import React, { useState } from "react";
import "./ModalForm.css"; // Importamos los estilos

function ModalForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Form Data: ", formData);
    onClose(); // Cerrar el modal después de guardar
  };

  const handleClear = () => {
    setFormData({
      title: "",
      category: "",
      image: "",
      video: "",
      description: "",
    });
  };

  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza nada

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2 className="modal-title">EDITAR CARD:</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Categoría:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
            </select>
          </label>
          <label>
            Imagen:
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          <label>
            Video:
            <input
              type="url"
              name="video"
              value={formData.video}
              onChange={handleChange}
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <div className="modal-buttons">
            <button type="submit" className="modal-btn-save">
              GUARDAR
            </button>
            <button type="button" className="modal-btn-clear" onClick={handleClear}>
              LIMPIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
