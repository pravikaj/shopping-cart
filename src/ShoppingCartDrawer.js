import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const ShoppingCartDrawer = (products, productids) => {
  const [data, setData] = useState({});
  //   const products = Object.values(data);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  const classes = useStyles();
  const [visible, setVisible] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setVisible(open);
    // setState({ ...state, right: open });
  };

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>Shopping Cart</Button>
      <Drawer anchor="right" open={visible} onClose={toggleDrawer(false)}>
        {products.map((product, index) => (
          <Grid key={product.sku} item>
            <ProductCard
              product={product}
              productid={productids[index]}
              className={product.title}
            ></ProductCard>
          </Grid>
        ))}
      </Drawer>
    </React.Fragment>
  );
};

export default ShoppingCartDrawer;
