import { createContext } from "react";
import axios from "axios";

export const ProductsContext = createContext(null);

let cart = [];

export const ProductsContextProvider = (props) => {
  const addToCart = (itemId) => {
    axios.get("http://localhost:5000/api/products/" + itemId).then((res) => {
      var item = cart.find((product) => product.item._id == itemId);
      if (item == null) {
        cart.push({
          quantity: 1,
          item: res.data,
        });
      } else cart.find((product) => product.item._id == itemId).quantity += 1;
    });
  };

  const removeFromCart = (itemId) => {
    var item = cart.find((product) => product.item._id == itemId);
    console.log(item);
    if (item != null) cart.pop((product) => product.item._id == itemId);
    //window.location.reload(true);
  };

  const getCart = () => {
    return cart;
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    getCart,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};
