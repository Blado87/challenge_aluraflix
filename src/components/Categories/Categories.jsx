import React from "react";
import Card from "../Card/Card";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories">
      <section className="category">
        <h2 className="category__title">Front End</h2>
        <div className="category__cards">
          <Card
            imageSrc="/html_css_js.jpg"
            title="HTML, CSS, JS"
            description="Aprende los fundamentos del Front End."
          />
          <Card
            imageSrc="/html_css_js.jpg"
            title="React Basics"
            description="Comienza a trabajar con React."
          />
          <Card
            imageSrc="/html_css_js.jpg"
            title="Vue.js Essentials"
            description="Una introducción a Vue.js para desarrolladores."
          />
        </div>
      </section>

      <section className="category">
        <h2 className="category__title">Back End</h2>
        <div className="category__cards">
          <Card
            imageSrc="/html_css_js.jpg"
            title="Node.js Fundamentals"
            description="Aprende a crear aplicaciones con Node.js."
          />
          <Card
            imageSrc="/html_css_js.jpg"
            title="Express.js Basics"
            description="Desarrolla APIs con Express.js."
          />
          <Card
            imageSrc="/html_css_js.jpg"
            title="MongoDB Essentials"
            description="Aprende bases de datos NoSQL con MongoDB."
          />
        </div>
      </section>
    </div>
  );
}

export default Categories;
