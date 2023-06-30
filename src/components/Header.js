import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Basket from "./Basket";
import "./Header.css";

export default function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const isBasketPage = location.pathname === "/basket";

  var color = "#ef70fa";
  if (!props.colorOfAU) {
    color = "blue";
  }

  function goToMainPage() {
    navigate("/");
  }

  return (
    <div id="header">
      <nav>
        <ul>
          <li id="title">
            <strong onClick={goToMainPage}>Gulbahce Burger</strong>
          </li>
          {!isBasketPage && (
            <a
              id="about-us"
              style={{ color: color, marginLeft: "270px" }}
              onClick={props.changeAboutUs}
            >
              About us
            </a>
          )}
          <Basket />
        </ul>
      </nav>
    </div>
  );
}
