import React, { useState } from "react";
import { Button, TextField, TextareaAutosize } from "@mui/material";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import styles from "../FormCheckout/FormCheckou.module.css";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          className={styles.textfield}
          id="standard-basic"
          label="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <TextField
          className={styles.textfield}
          id="standard-basic"
          label="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <TextField
          className={styles.textfield}
          id="standard-basic"
          label="Teléfono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <TextareaAutosize
          className={styles.textarea} // Añadir una clase de estilo para el textarea
          rowsMin={3} // Establecer el número mínimo de filas
          placeholder="Comentario" // Agregar un placeholder
          value={userData.comment}
          onChange={(e) =>
            setUserData({ ...userData, comment: e.target.value })
          }
        />

        <Button type="submit" variant="contained" className={styles.button}>
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default FormCheckout;
