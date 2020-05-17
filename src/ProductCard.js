import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    width: 300,
    height: 630,
    textAlign: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const sizes = { S: "S", M: "M", L: "L", XL: "XL" };

const ProductCard = ({ product, productid }) => {
  const [data, setData] = useState({});
  const products = Object.values(data);

  const classes = useStyles();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={"data/products/" + productid + "_1.jpg"}
          title={product.title}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="body2" component="p">
            {product.currencyFormat}
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">S</Button>
        <Button size="small">M</Button>
        <Button size="small">L</Button>
        <Button size="small">XL</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
