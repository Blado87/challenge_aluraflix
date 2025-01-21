import React from "react";
import "./SectionGroup.css";

const SectionGroup = ({ title, cards }) => {
  return (
    <div className="section-group">
      <div className="section-title-container">{title}</div>
      <div className="cards-container">{cards}</div>
    </div>
  );
};

export default SectionGroup;

