import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos`);
  };

  console.log(productSelected);
  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img
        style={{ height: 250 }}
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
