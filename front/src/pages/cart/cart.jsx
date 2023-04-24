import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/products-context";

export const Cart = () => {
  const { getCart, removeFromCart } = useContext(ProductsContext);
  const [cart, setCart] = useState(0);
  function handleClick() {
    setCart(getCart());
  }

  return (
    <div className="cart-grid">
      <h1 className="cart-title">Carrito</h1>
      {getCart().map((product) => (
        <div className="cart-product" key={product.item._id}>
          <img
            className="cart-img"
            src={`http://localhost:5000${product.item.image}`}
            alt={product.item.name}
          />
          <div className="cart-info">
            <h2 className="cart-name">{product.item.name}</h2>
            <p className="cart-brand">Marca: {product.item.brand}</p>
            <p className="cart-price">Precio: {product.item.price}</p>
            <p className="cart-quantity">Cantidad: {product.quantity}</p>
          </div>
          <button
            className="cart-button"
            onClick={() => {
              removeFromCart(product.item._id);
              handleClick();
            }}
          >
            Eliminar del carrito
          </button>
        </div>
      ))}
    </div>
  );
};
