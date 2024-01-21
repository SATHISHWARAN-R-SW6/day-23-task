// src/App.js
import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import products from "./Products";
import "./styles.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (Product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>React Shopping Cart</h1>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
