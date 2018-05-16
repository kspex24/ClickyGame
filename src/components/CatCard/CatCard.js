import React from "react";
import "./CatCard.css";

const CatCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.selectCat(props.id)} />
    </div>

  </div>
);

export default CatCard;
