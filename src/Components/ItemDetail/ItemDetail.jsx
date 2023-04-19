import React from "react";
import ItemCount from "../Components/ItemCount/ItemCount";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div>
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

        <ItemCount
          stock={productSelected.stock}
          onAdd={onAdd}
          initial={quantity}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
