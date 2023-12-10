import React from "react";
import { useSelector } from "react-redux";

import Productcard from "./ProductsView/Productcard";
import Spinner from "./Spinner/Spinner";
export default function Productview() {
  
  const productsData = useSelector((state) => state.product);
  
  return !productsData.length ? (
    <Spinner />
  ) : (
    <div className="row my-5 mx-5">
      {productsData.map((product) => (
            
            <Productcard product={product}></Productcard>
    
      ))}
    </div>
  );
}
