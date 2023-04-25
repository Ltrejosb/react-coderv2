import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
      <Typography variant="h2" component="h2">
        {contador}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Button variant="outlined" color="primary" onClick={sumar}>
          +
        </Button>
        <Button variant="outlined" color="primary" onClick={restar}>
          -
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAdd(contador)}
        >
          Agregar
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
