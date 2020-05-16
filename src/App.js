import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Grid, makeStyles, Box } from "@material-ui/core";

const sizes = { S: "S", M: "M", L: "L", XL: "XL" };

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  const productids = Object.keys(data);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("./data/products.json");
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
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
      {products.map((product) => (
        <ProductCard product={product} productid={product.sku} />
      ))}

      <ul>
        {products.map((product) => (
          <li key={product.sku}>{product.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default App;
