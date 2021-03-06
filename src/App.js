import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import { Grid, makeStyles, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";

const sizes = { S: "S", M: "M", L: "L", XL: "XL" };

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const productids = Object.keys(data);
  // const classes = useStyles();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  const [visible, setVisible] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setVisible(open);
  };

  return (
    <React.Fragment>
      {/* <ShoppingCartDrawer products={products} productids={productids} /> */}
      <Button style={{ float: "right" }} onClick={toggleDrawer(true)}>
        My Cart
      </Button>
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
      <Grid container justify="center" spacing="5">
        {products.map((product, index) => (
          <Grid key={product.sku} item>
            <ProductCard
              product={product}
              productid={productids[index]}
              className={product.title}
            ></ProductCard>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default App;
