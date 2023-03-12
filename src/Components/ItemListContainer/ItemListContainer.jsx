import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const produdctosFiltrados = products.filter(
    (elemento) => elemento.category === categoryId
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryId ? produdctosFiltrados : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
