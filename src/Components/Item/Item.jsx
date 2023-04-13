import React from "react";
import styles from "./Item.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card
      className={styles.card}
      sx={{
        marginBottom: "50px",
        width: "40%",
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        className={styles.cardMedia}
        sx={{ height: 200, objectFit: "contain", border: "" }}
        image={element.img}
        title={element.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {element.title}
        </Typography>
        <Divider variant="middle" />
        <Typography variant="body2" color="text.secondary">
          {element.description}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          $ {element.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${element.id}`}>
          <Button size="small" variant="contained">
            detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
