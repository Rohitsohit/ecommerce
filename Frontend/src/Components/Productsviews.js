
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Productcard from "./ProductsView/Productcard";
import Spinner from "./Spinner/Spinner";
export default function Productview() {
  
  const data = useSelector((state) => state.product);

  const [productData, setproductData] = useState();
  const handleCategory=(cat)=>{
    const updatedList = data.filter((item) => item.productCategory === cat);
    setproductData(updatedList);
  }
  useEffect(() => {
    setproductData(data);
  }, [data])
  
  return !productData ? (
    <Spinner />
  ) : (
    <div className="row my-5 mx-5">
      <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={()=>setproductData(data)} >All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={()=>{handleCategory("Phone")}} >Phone</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={()=>{handleCategory("Hardware")}} >
            Hardware
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={()=>{handleCategory("Laptop")}}>Laptop</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={()=>{handleCategory("Accessories")}} >Computer Accessories</button>
        </div>
        
    <div className="row my-5 mx-5">
      {productData.map((product) => (
            
            <Productcard product={product}></Productcard>
    
      ))}
    </div>
    </div>
  );
}
