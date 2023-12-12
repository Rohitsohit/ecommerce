import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../actions/product';
import { Link } from 'react-router-dom';
export default function () {
    const productId = useParams();
    
    const [product, setproduct] = useState(null);

    useEffect(() => {
      
      productData();
      
    }, [])
    
    const productData= async()=>{
      var data = await getProductById(productId.id);
      setproduct(data.data);
    }

    const addProduct = ()=>{

    }

  return (
    <>
    { product &&(
  <div className="container my-5 py-2">
  <div className="row">
    <div className="col-md-6 col-sm-12 py-3">
      <img
        className="img-fluid"
        src={product.productImage}
        alt={product.productName}
        width="400px"
        height="400px"
      />
    </div>
    <div className="col-md-6 col-md-6 py-5">
      <h4 className="text-uppercase text-muted">{product.productCategory}</h4>
      <h1 className="display-5">{product.productName}</h1>
     
      <h3 className="display-6  my-4">{product.productPrice}</h3>
      <p className="lead">{product.productDescription}</p>
      <button
        className="btn btn-outline-dark"
        onClick={() => addProduct()}
      >
        Add to Cart
      </button>
      <Link to="/cart" className="btn btn-outline-dark mx-3">
        Go to Cart
      </Link>
    </div>
  </div>
</div>
)}
    
    </>

  )

  }
