import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to={"/cart"}>
        <BsCart2
          size={30}
          style={{
            color: "#1085fb",
          }}
        />

        <span>0</span>
      </Link>
    </div>
  );
};

export default CartWidget;
