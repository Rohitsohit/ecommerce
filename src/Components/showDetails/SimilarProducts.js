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
          <div className="d-flex">
                <div key={product.product._id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={product.product.productImage}
                    alt="Card"
                    height={250}
                    width={190}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.product.productName.substring(0, 15)}...
                    </h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">{product.product.productPrice}</li>
                  </ul>
                  <div className="card-body">
                    <button
                      className="btn btn-dark m-1"
                      onClick={handleSeeDetails}
                    >
                      see details
                    </button>
                  </div>
                </div>
          </div>
        </div> 

  )
}
