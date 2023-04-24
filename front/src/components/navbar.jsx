import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link className="link" to="/">
          {" "}
          Products{" "}
        </Link>
        <Link className="link" to="/cart">
          Cart
        </Link>
      </div>
    </div>
  );
};
