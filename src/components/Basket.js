import React, { useContext, useState, useEffect } from "react";
import BasketContext from "./BasketContext";
import { useNavigate } from "react-router-dom";

export default function Basket(props) {
  const [price, setPrice] = useState(0);
  const bskt = useContext(BasketContext);
  const navigate = useNavigate();
  useEffect(() => {
    let newPrice = 0;
    for (const item of bskt.basket) {
      newPrice += item.totalPrice;
    }
    setPrice(newPrice);
  }, [bskt.basket]);
  function goToBasketPage() {
    navigate("/basket");
  }
  return (
    <div
      onClick={goToBasketPage}
      style={{
        marginLeft: "1300px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        padding: "8px",
        position: "fixed",
      }}
    >
      <span style={{ color: "black" }}>
        Basket price: <span style={{ color: "red" }}>{price}</span>
      </span>
      <img
        src={"https://cdn-icons-png.flaticon.com/512/5218/5218600.png"} // Resim kaynağını buraya ekleyin
        alt="Basket"
        style={{ width: "25px", marginRight: "4px" }}
      />
    </div>
  );
}
