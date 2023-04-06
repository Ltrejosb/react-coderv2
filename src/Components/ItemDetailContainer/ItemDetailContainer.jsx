import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito } = useContext(CartContext);

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito(producto);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{productSelected.title}</h1>
      <img
        style={{ height: 250, objectFit: "cover" }}
        src={productSelected.img}
        alt={productSelected.description}
      />
      <h2>$ {productSelected.price}</h2>
      <h3>{productSelected.description}</h3>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
