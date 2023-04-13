import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>{contador}</h2>
      <Button variant="contained" onClick={sumar}>
        +
      </Button>
      <Button variant="outlined" onClick={restar}>
        -
      </Button>
      <Button color="primary" onClick={() => onAdd(contador)}>
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
