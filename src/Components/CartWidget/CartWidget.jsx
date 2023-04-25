import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to={"/cart"} style={{ textDecoration: "none" }}>
      <IconButton color="inherit">
        <Badge badgeContent={total} color="error">
          <BsCart2 size={30} style={{ color: "#1085fb" }} />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartWidget;
