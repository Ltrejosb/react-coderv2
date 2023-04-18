import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Button } from "@mui/material";
import styles from "./Cart.module.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);

  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "Estas seguro de vaciar el carrito?",
      text: "Esta acción no podrá ser revertida!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
      cancelButtonText: "Cancelar",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Listo!", "Tu carrito a sido vaciado.", "success");
        clearCart();
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>Gracias por su Compra</h2>
        <h4>El comprobante es : {orderId}</h4>
        <Link to="/">Seguir Comprando </Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className={styles.cartDetails}>
          {cart.map((elemento) => {
            return (
              <div className={styles.itemCart} key={elemento.id}>
                <h2>{elemento.title}</h2>
                <img src={elemento.img} alt="" style={{ width: "200px" }} />
                <h3>{elemento.quantity}</h3>
                <h3>${elemento.price}</h3>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(elemento.id)}
                >
                  Eliminar
                </Button>
              </div>
            );
          })}
          <div className={styles.cartTotal}>
            <div>
              <h3>Sub Total $</h3>
              <h3>Descuento $</h3>
              <h2>El total de tu compra es: ${getTotalPrice()}</h2>
            </div>
            {cart.length > 0 && (
              <div>
                <Button variant="contained" onClick={() => setShowForm(true)}>
                  Terminar la compra
                </Button>
                <Button onClick={clear} variant="contained">
                  Vaciar carrito
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
