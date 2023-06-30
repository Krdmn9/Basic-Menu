import React from "react";
import "./MenuItem.css";
import { useNavigate } from "react-router-dom";

export default function MenuItem(props) {
  const navigate = useNavigate();
  function goToProductPage() {
    navigate(`/product/${props.name}`);
  }
  return (
    <div className="menu-item">
      <img onClick={goToProductPage} src={props.img} alt={props.name} />
      <div className="menu-item-info">
        <p className="menu-item-name">{props.name}</p>
        <p className="menu-item-price">{props.price + " TL"}</p>
      </div>
    </div>
  );
}
