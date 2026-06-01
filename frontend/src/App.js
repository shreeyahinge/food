import React, { useState } from "react";
import "./App.css";

function App() {

  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const foods = [
    { name: "Burger", price: 100 },
    { name: "Pizza", price: 200 },
    { name: "Sandwich", price: 80 }
  ];

  const addToOrder = (food) => {

    setOrders([...orders, food]);
    setTotal(total + food.price);

  };

  const placeOrder = async () => {

    const response = await fetch(
      "http://localhost:5000/place-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: orders,
          total
        })
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="container">

      <h1>Online Food Ordering System</h1>

      <div className="main-layout">

        <div className="menu-section">

          <h2>Food Menu</h2>

          {foods.map((food, index) => (
            <div className="food-card" key={index}>
              <h3>{food.name}</h3>
              <p>₹{food.price}</p>

              <button
                onClick={() => addToOrder(food)}
              >
                Add
              </button>
            </div>
          ))}

        </div>

        <div className="order-section">

          <h2>Your Order</h2>

          {orders.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price}
            </p>
          ))}

          <h3>Total: ₹{total}</h3>

          <button onClick={placeOrder}>
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;