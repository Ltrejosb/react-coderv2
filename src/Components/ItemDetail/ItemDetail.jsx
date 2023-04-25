import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ItemCount from "../ItemCount/ItemCount";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    margin: "auto",
    marginTop: theme.spacing(2),
    border: "1px solid #ccc",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
  },
  mediaContainer: {
    position: "relative",
    overflow: "hidden",
  },
  media: {
    height: 250,
    objectFit: "cover",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  content: {
    flexGrow: 1,
  },
}));

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.mediaContainer}>
        <CardMedia
          className={classes.media}
          image={productSelected.img}
          title={productSelected.description}
        />
      </div>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h1">
          {productSelected.title}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          $ {productSelected.price}
        </Typography>
        <Typography variant="body1" component="p">
          {productSelected.description}
        </Typography>
        <ItemCount
          stock={productSelected.stock}
          onAdd={onAdd}
          initial={quantity}
        />
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
