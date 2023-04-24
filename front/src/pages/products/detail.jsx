import React from "react";
import { useLocation } from "react-router-dom";

export const Detail = () => {
  const location = useLocation();
  const { state } = location;
  const product = state.from;
  return (
    <div className="detail-grid">
      <div className="detail">
        <h1 className="detail-title">Detalle</h1>
        <h2 className="detail-name">{product.name}</h2>
        <img
          className="detail-img"
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
        />
        <p className="detail-desc">{product.description}</p>
        <p className="detail-brand">Marca: {product.brand}</p>
        <p className="category">Categoria: {product.category}</p>
        <p className="detail-price">Precio: {product.price}</p>
        <p className="detail-rating">Rating: {product.rating}</p>
        <p className="detail-review">Reviews: {product.numReviews}</p>
      </div>
    </div>
  );
};
