import React from "react";
import { useSelector } from "react-redux";
import { getProductList } from "./productSlice.";
import { Stack } from "react-bootstrap";
import { Product } from "./Product";

export default function ProductLists() {
  const products = useSelector(getProductList);
  return (
    <Stack direction="horizontal" style={{flexWrap:"wrap",gap:"2em",padding:"2em",justifyContent:"center"}}>
      {products.map(({id,image,name,description,price}) => {
        return <Product id={id} image={image} name={name} description={description} price={price}/>;
      })}
    </Stack>
  );
}
