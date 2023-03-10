import React from "react";
import "./ProjCard.scss";
import {Link} from "react-router-dom"

const ProjCard = ({ item }) => {
  return (
    <Link to="/" className="link">
      <div className="projcard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjCard;
