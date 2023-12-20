import React, { useState } from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function SimilarProducts(product) {

  const history = useNavigate();
  const handleSeeDetails=()=>{
    history(`/productdetails/${product.product._id}`);
  }

  return (    
    <div className="py-4 my-4">
    <div className="d-flex justify-content-center">
      <div key={product.product._id} className="card text-center">
        <img
          className="card-img-top p-3"
          src={product.product.productImage}
          alt="Product"
          style={{ height: '250px', width: '100%', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.product.productName.substring(0, 15)}...</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item lead">$ {product.product.productPrice}</li>
        </ul>
        <div className="card-body">
          <button className="btn btn-dark m-1" onClick={handleSeeDetails}>
            See Details
          </button>
        </div>
      </div>
    </div>
  </div>
  

  )
}
