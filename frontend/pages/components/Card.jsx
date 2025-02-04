import React from "react";

function Card({ title, description, onClick }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="redirect-icon" onClick={onClick}></div>
    </div>
  );
}

export default Card;
