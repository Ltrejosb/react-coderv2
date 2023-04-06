import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <div>
      <Link to={"/cart"}>
        <BsCart2
          size={30}
          style={{
            color: "#1085fb",
          }}
        />

        <span>{total}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
