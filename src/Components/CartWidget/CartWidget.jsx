import React from "react";
import { BsCart2 } from "react-icons/bs";
import styles from "../Navbar/Navbar.module.css";

const CartWidget = () => {
  return (
    <div>
      <BsCart2 size={30} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
