import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ color, text }) => {
  const validColors = ['orange', 'green', 'cyan', 'purple', 'pink'];
  const colorClass = validColors.includes(color) ? `line-${color}` : 'line-default';
  const textColorClass = validColors.includes(color) ? `text-${color}` : 'text-default';

  return (
    <div className="section-title">
      <h2 className={textColorClass}>{text}</h2>
      <div className={`underline ${colorClass}`}></div>
    </div>
  );
};

export default SectionTitle;