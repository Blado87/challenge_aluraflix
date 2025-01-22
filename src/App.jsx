import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import SectionTitle from './components/SectionTitle/SectionTitle';
import Card from './components/Card/Card';
import SectionGroup from "./components/SectionGroup/SectionGroup";

function App() {
  const [data, setData] = useState([]);

  // Cargar datos desde db.json
  useEffect(() => {
    fetch('/db.json') // db.json debe estar en la carpeta `public`
      .then(response => response.json())
      .then(data => setData(data.sections))
      .catch(error => console.error("Error al cargar los datos:", error));
  }, []);

  return (
    <>
      <Header />
      <Banner />
      {data.map(section => (
        <SectionGroup
          key={section.id}
          title={<SectionTitle color={getSectionColor(section.name)} text={section.name.toUpperCase()} />}
          cards={section.cards.map(card => (
            <Card
              key={card.id}
              logo={<img src={`/${card.logo}`} alt={card.title} className="card-logo-img" />}
              title={card.title}
              description={card.description}
            />
          ))}
        />
      ))}
      <Footer />
    </>
  );
}

// Función para asignar colores según el nombre de la sección
const getSectionColor = (sectionName) => {
  switch (sectionName.toLowerCase()) {
    case "frontend":
      return "cyan";
    case "backend":
      return "green";
    case "innovación y gestión":
      return "orange";
    default:
      return "gray";
  }
};

export default App;
