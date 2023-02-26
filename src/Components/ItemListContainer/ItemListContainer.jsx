import React from "react";
import styles from "../Navbar/Navbar.module.css";

const ItemListContainer = ({ saludo = "Hola" }) => {
  return (
    <div>
      <h1 className={styles.texto}>{saludo}</h1>
    </div>
  );
};

export default ItemListContainer;
