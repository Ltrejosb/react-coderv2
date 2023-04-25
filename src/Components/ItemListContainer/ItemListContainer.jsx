import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import SyncLoader from "react-spinners/SyncLoader";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollections = collection(db, "products");
    let consulta = undefined;

    if (categoryId) {
      const q = query(itemsCollections, where("category", "==", categoryId));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollections);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <SyncLoader
          color={"#1085fb"}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "300px",
          }}
        />
      )}
    </div>
  );
};

export default ItemListContainer;
