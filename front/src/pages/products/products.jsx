import React, { useEffect, useState, useContext } from "react";
import { ProductsContext } from "../../context/products-context";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(ProductsContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <p className="cart-counter">Cart: {count}</p>
      </div>
      <div className="product-grid" style={{ textAlign: "center" }}>
        {products.map((product) => (
          <div className="product" key={product._id}>
            <h2 className="product-title">{product.name}</h2>
            <img
              className="product-image"
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
            />
            <p>Marca: {product.brand}</p>
            <p>Categoria: {product.category}</p>
            <p>Precio: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Reviews: {product.numReviews}</p>

            {product.countInStock > 0 && (
              <button
                onClick={() => {
                  addToCart(product._id);
                  handleClick();
                }}
              >
                Agregar al carrito
              </button>
            )}
            <NavLink to={`/detail/${product._id}`} state={{ from: product }}>
              Ver detalle
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
