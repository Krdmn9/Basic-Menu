import { useContext, useState } from "react";
import BasketContext from "./BasketContext";
export default function Details(props) {
  const [productName] = useState(props.item.name);
  const [productPrice] = useState(props.item.price);
  const [selectedOption, setSelectedOption] = useState(null);
  const bskt = useContext(BasketContext);
  function addBasket() {
    console.log(productName);
    if (selectedOption) {
      let optionPrice = 0;

      switch (productName) {
        case "Cheeseburger":
          optionPrice = selectedOption === "Add Extra Cheese (+20 TL)" ? 20 : 0;
          break;
        case "Fizzy Drink":
          optionPrice = 0;
          break;
        case "Onion Rings":
          optionPrice = selectedOption === "Double Portion (+15 TL)" ? 15 : 0;
          break;
        case "Ice Cream":
          optionPrice =
            selectedOption === "Strawberry (+5 TL)"
              ? 5
              : selectedOption === "Mint (+10 TL)"
              ? 10
              : 0;
          break;
        case "French Fries":
          optionPrice =
            selectedOption === "Medium Size (+10 TL)"
              ? 10
              : selectedOption === "Large Size (+20 TL)"
              ? 20
              : 0;
          break;
        default:
          break;
      }

      const totalPrice = productPrice + optionPrice;
      bskt.addToBasket(productName, selectedOption, totalPrice);
    } else {
      console.log("Please select an option.");
    }
  }

  return (
    <>
      {productName === "Cheeseburger" && (
        <div
          className="details-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            <input
              type="radio"
              name="cheeseburger"
              value="No Extra Cheese (+0 TL)"
              onChange={() => setSelectedOption("No Extra Cheese (+0 TL)")}
            />
            No Extra Cheese (+0 TL)
          </label>
          <label>
            <input
              type="radio"
              name="cheeseburger"
              value="Add Extra Cheese (+20 TL)"
              onChange={() => setSelectedOption("Add Extra Cheese (+20 TL)")}
            />
            Add Extra Cheese (+20 TL)
          </label>
          <label>
            <button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={addBasket}
            >
              Add to basket
            </button>
          </label>
        </div>
      )}
      {productName === "Fizzy Drink" && (
        <div
          className="details-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            <input
              type="radio"
              name="fizzyDrink"
              value="Cola (+0 TL)"
              onChange={() => setSelectedOption("Cola (+0 TL)")}
            />
            Cola (+0 TL)
          </label>
          <label>
            <input
              type="radio"
              name="fizzyDrink"
              value="Fanta (+0 TL)"
              onChange={() => setSelectedOption("Fanta (+0 TL)")}
            />
            Fanta (+0 TL)
          </label>
          <label>
            <input
              type="radio"
              name="fizzyDrink"
              value="Sprite (+0 TL)"
              onChange={() => setSelectedOption("Sprite (+0 TL)")}
            />
            Sprite (+0 TL)
          </label>
          <label>
            <button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={addBasket}
            >
              Add to basket
            </button>
          </label>
        </div>
      )}
      {productName === "Onion Rings" && (
        <div
          className="details-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            <input
              type="radio"
              name="onionRings"
              value="Single Portion (+0 TL)"
              onChange={() => setSelectedOption("Single Portion (+0 TL)")}
            />
            Single Portion (+0 TL)
          </label>
          <label>
            <input
              type="radio"
              name="onionRings"
              value="Double Portion (+15 TL)"
              onChange={() => setSelectedOption("Double Portion (+15 TL)")}
            />
            Double Portion (+15 TL)
          </label>
          <label>
            <button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={addBasket}
            >
              Add to basket
            </button>
          </label>
        </div>
      )}
      {productName === "Soft Serve Ice Cream" && (
        <div
          className="details-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            <input
              type="radio"
              name="iceCream"
              value="Vanilla (+0 TL)"
              onChange={() => setSelectedOption("Chocolate (+0 TL)")}
            />
            Vanilla (+0 TL)
          </label>
          <label>
            <input
              type="radio"
              name="iceCream"
              value="Chocolate (+0 TL)"
              onChange={() => setSelectedOption("Chocolate (+0 TL)")}
            />
            Chocolate (+0 TL)
          </label>
          <label>
            <input
              type="radio"
              name="iceCream"
              value="Strawberry (+5 TL)"
              onChange={() => setSelectedOption("Strawberry (+5 TL)")}
            />
            Strawberry (+5 TL)
          </label>
          <label>
            <input
              type="radio"
              name="iceCream"
              value="Mint (+10 TL)"
              onChange={() => setSelectedOption("Mint (+10 TL)")}
            />
            Mint (+10 TL)
          </label>
          <label>
            <button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={addBasket}
            >
              Add to basket
            </button>
          </label>
        </div>
      )}
      {productName === "French Fries" && (
        <div
          className="details-content"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            <input
              type="radio"
              name="frenchFries"
              value="Small Size (+0 TL)"
              onChange={() => setSelectedOption("Small Size (+0 TL)")}
            />
            Small Size (+0 TL)
          </label>
          <label>
            <input
              type="radio"
              name="frenchFries"
              value="Medium Size (+10 TL)"
              onChange={() => setSelectedOption("Medium Size (+10 TL)")}
            />
            Medium Size (+10 TL)
          </label>
          <label>
            <input
              type="radio"
              name="frenchFries"
              value="Large Size (+20 TL)"
              onChange={() => setSelectedOption("Large Size (+20 TL)")}
            />
            Large Size (+20 TL)
          </label>
          <label>
            <button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={addBasket}
            >
              Add to basket
            </button>
          </label>
        </div>
      )}
    </>
  );
}
