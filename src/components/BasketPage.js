import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import BasketContext from "./BasketContext";
import "./BasketPage.css"; // CSS dosyasını içe aktarın

export default function BasketPage() {
  const bskt = useContext(BasketContext);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let newPrice = 0;
    for (const item of bskt.basket) {
      newPrice += item.totalPrice;
    }
    setPrice(newPrice);
  }, [bskt.basket]);
  function addQuantityToObjects(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].quantity = 1;
    }
    return arr;
  }

  function increaseQuantityForDuplicateOptions(arr) {
    const duplicates = {};

    for (let i = 0; i < arr.length; i++) {
      const key = arr[i].productName + arr[i].selectedOption;
      if (duplicates[key]) {
        duplicates[key].quantity++;
      } else {
        duplicates[key] = arr[i];
      }
    }

    const result = Object.values(duplicates);
    return result;
  }

  addQuantityToObjects(bskt.basket);
  increaseQuantityForDuplicateOptions(bskt.basket);
  var myArray = bskt.basket;

  var uniqueArray = myArray.filter((item, index, arr) => {
    return (
      arr.findIndex(
        (obj) =>
          obj.selectedOption === item.selectedOption &&
          obj.productName === item.productName
      ) === index
    );
  });

  return (
    <div>
      <Header />
      <div
        style={{
          background: "rgb(200, 199, 199)",
          display: "flex",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <img
          src={"https://cdn-icons-png.flaticon.com/512/5218/5218600.png"} // Resim kaynağını buraya ekleyin
          alt="Basket"
          style={{ width: "120px", marginLeft: "80px" }}
        />
        <div style={{ fontSize: "40px", marginLeft: "80px" }}>
          BASKET TOTAL: <span style={{ color: "red" }}>{price}</span>
        </div>
        <button
          style={{
            fontSize: "40px",
            color: "white",
            backgroundColor: "red",
            marginLeft: "520px",
            height: "100px",
            width: "300px",
          }}
        >
          Purchase
        </button>
      </div>

      <div className="container">
        {uniqueArray.map((item, index) => (
          <div key={index} className="item-container">
            <div
              style={{
                margin: "3px",
                background: "grey",
                height: "80px",
                width: "350px",
                textAlign: "center",
                fontSize: "35px",
              }}
            >
              {item.productName}
            </div>
            <div
              style={{
                margin: "3px",
                background: "grey",
                height: "80px",
                width: "550px",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              {item.selectedOption}
            </div>
            <div
              style={{
                margin: "3px",
                background: "grey",
                height: "80px",
                width: "250px",
                textAlign: "center",
                fontSize: "35px",
              }}
            >
              Quantity: {item.quantity}
            </div>
            <div
              style={{
                margin: "3px",
                background: "grey",
                height: "80px",
                width: "250px",
                textAlign: "center",
                fontSize: "35px",
              }}
            >
              {item.totalPrice * item.quantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
