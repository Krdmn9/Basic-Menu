import React, { useState, useEffect } from "react";
import beefburger from "./menu_pictures/beef_burger.jpg";
import cheese_burger from "./menu_pictures/cheeseburger.jpg";
import chicken_burger from "./menu_pictures/chicken_burger.jpg";
import chicken_legs from "./menu_pictures/chicken_legs.jpg";
import fizzy_drink from "./menu_pictures/fizzy_drink.jpg";
import fries from "./menu_pictures/fries.jpg";
import ice_cream from "./menu_pictures/ice_cream.jpg";
import lemonade from "./menu_pictures/lemonade.jpg";
import onion_rings from "./menu_pictures/onion_rings.jpg";
import pizza_slice from "./menu_pictures/pizza_slice.jpg";
import water from "./menu_pictures/water.jpg";
import MenuItem from "./MenuItem";
import menu from "./menu_items.csv";
import './MenuList.css'

export default function MenuList() {
  const imgs = [cheese_burger, onion_rings, fries, chicken_burger, fizzy_drink, water, beefburger, chicken_legs, ice_cream, lemonade, pizza_slice];
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
            img: imgs[index]
          };
        });
        setMenuItems(menu);
      });
  }, []);

  return (
    <div className="menu-items">
      {menuItems.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
}
