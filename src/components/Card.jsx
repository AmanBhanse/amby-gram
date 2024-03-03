import React from "react";
import "./Card.scss";

const Card = ({ text, image }) => {
  return (
    <div className="card">
      <img src={image} alt="Not found" />
    </div>
  );
};

export default Card;
