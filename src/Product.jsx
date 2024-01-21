// src/components/Product.js
import React from "react";

const Product = ({ product, addToCart, removeFromCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
    </div>
  );
};

export default Product;
