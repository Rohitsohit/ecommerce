import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById} from '../../actions/product';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import SimilarProducts from './SimilarProducts';
import { useSelector } from 'react-redux';
export default function () {
    const productId = useParams();
    
    const [product, setproduct] = useState();
    const [similarProducts, setsimilarProducts] = useState();

    var allProducts = useSelector((state) => state.product);
    

    useEffect(() => {  
      const productData = async () => {
        try {
          const data = await getProductById(productId.id);
          setproduct(data.data);
          const similarProductList = allProducts.filter(
            (item) => item.productCategory === data.data.productCategory
          );
          setsimilarProducts(similarProductList);
        } catch (error) {
          console.error('Error fetching product data:', error);
        }
      };
    
      productData();
    }, [productId.id, allProducts]);
    
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
    <div className="container">
    <div className="row my-5 py-5">
      <div className="d-none d-md-block">
      <h2 className="">You may also Like</h2>
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={50}
        >
          {similarProducts &&(
            similarProducts.map((product) => (
            
            <SimilarProducts product={product}></SimilarProducts>
    
      )))
          }
          
        </Marquee>
      </div>
    </div>
  </div>

  
    </>

  )

  }
