import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css"; // Import the CSS file
import Header from "./Header";
import Footer from "./Footer";
import Details from "./Details";
import ContactInfo from "./ContactInfo";
import Location from "./Location";
// Images
import cheese_burger from "./menu_pictures/cheeseburger.jpg";
import onion_rings from "./menu_pictures/onion_rings.jpg";
import fries from "./menu_pictures/fries.jpg";
import chicken_burger from "./menu_pictures/chicken_burger.jpg";
import fizzy_drink from "./menu_pictures/fizzy_drink.jpg";
import water from "./menu_pictures/water.jpg";
import beefburger from "./menu_pictures/beef_burger.jpg";
import chicken_legs from "./menu_pictures/chicken_legs.jpg";
import ice_cream from "./menu_pictures/ice_cream.jpg";
import lemonade from "./menu_pictures/lemonade.jpg";
import pizza_slice from "./menu_pictures/pizza_slice.jpg";
import menu from "./menu_items.csv";
import BasketContext from "./BasketContext";

export default function ProductPage() {
  const param = useParams().name;
  const bskt = useContext(BasketContext);
  const [withOption, setWithOption] = useState(false);
  const [ci, setci] = useState(false);
  const [l, setl] = useState(false);

  function addBasket() {
    bskt.addToBasket(menuItem.name, "Standard", menuItem.price);
  }

  function changeContactInfo() {
    setci(!ci);
    if (l) {
      setl(false);
    }
  }

  function changeLocation() {
    setl(!l);
    if (ci) {
      setci(false);
    }
  }

  const imgs = [
    cheese_burger,
    onion_rings,
    fries,
    chicken_burger,
    fizzy_drink,
    water,
    beefburger,
    chicken_legs,
    ice_cream,
    lemonade,
    pizza_slice,
  ];
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(menu)
      .then((response) => response.text())
      .then((text) => {
        const lines = text.split("\n");
        const menu = lines.map((line, index) => {
          const [name, price] = line.split(",");
          return {
            name,
            price: parseFloat(price),
            img: imgs[index],
          };
        });
        setMenuItems(menu);
      });
  }, []);

  const menuItem = menuItems.find((item) => item.name === param);
  useEffect(() => {
    if (menuItems.length > 0) {
      const menuItem = menuItems.find((item) => item.name === param);
      console.log(menuItem.name);
      if (
        menuItem &&
        (menuItem.name === "French Fries" ||
          menuItem.name === "Fizzy Drink" ||
          menuItem.name === "Onion Rings" ||
          menuItem.name === "Cheeseburger" ||
          menuItem.name === "Soft Serve Ice Cream")
      ) {
        setWithOption(true);
      }
    }
  }, [menuItems, param]);

  return (
    <div className="product-page">
      <Header />
      <div className="product-page-container">
        <div className="menu-items">
          {menuItem && (
            <div className="menu-item-container">
              <img
                src={menuItem.img}
                alt={menuItem.name}
                className="menu-item-image"
              />

              <div className="menu-item-details">
                <h1>{menuItem.name}</h1>
                <p style={{ fontSize: "30px" }}>Price: {menuItem.price} TL</p>
                {withOption && menuItem && (
                  <div className="details-container">
                    <Details item={menuItem} style={{ marginLeft: "80px" }} />
                  </div>
                )}

                {!withOption && (
                  <button onClick={addBasket} className="add-basket-button">
                    Add button
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer
        changeContactInfo={changeContactInfo}
        changeLocation={changeLocation}
        colorOfCI={ci ? "#ef70fa" : "blue"}
        colorOfL={l ? "#ef70fa" : "blue"}
      />

      {l && <Location isVisibleL={l} />}
      {ci && <ContactInfo isVisibleCI={ci} />}
    </div>
  );
}
