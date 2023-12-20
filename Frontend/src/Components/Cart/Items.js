import React,{ useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {getItemDelete} from "../../actions/product";
import { useDispatch } from "react-redux";
const formData ={
  email:"",
  productId :"",
};
export default function Items(product) {
  const dispatch = useDispatch();



  const DeleteItemHandle = ()=>{
    const data=JSON.parse(localStorage.getItem("profile-shoper"))
    formData.productId = product.product._id; 
    formData.email = data.data.data.myUser.email; 
    dispatch(getItemDelete(formData));
  }

  return (
     <div className="card-body">
     <div className="row">
       <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
         <div
           className="bg-image hover-overlay hover-zoom ripple rounded"
           data-mdb-ripple-color="light"
         >
           <img
             src={product.product.productImage}
             className="w-100"
             width="80"
             alt="product Image"
           />
           <a href="#!">
             <div
               className="mask"
               style={{
                 backgroundcolor: "rgba(251, 251, 251, 0.2)",
               }}
             ></div>
           </a>
         </div>
       </div>

       <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
         <p>
           <strong>{product.product.productName}</strong>
         </p>
         <p>{product.product.productDescription}</p>
         
         <button
           type="button"
           className="btn btn-outline-dark btn-sm me-1 mb-2"
           data-mdb-toggle="tooltip"
           title="Remove item"
           onClick={DeleteItemHandle}
         >
           <i className="fas fa-trash"></i>
         </button>
         
       </div>

       <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
         <div className="d-flex mb-4" style={{ maxwidth: "300px" }}>
           <button
             className="btn btn-outline-dark px-3 me-2"
             
           >
             <i className=" fas fa-minus"></i>
           </button>

           <div className="form-outline">
             <input
               id="form1"
               min="0"
               name="quantity"
               value="1"
               type="number"
               className="form-control"
             />
             <label className="form-label" for="form1">
               Quantity
             </label>
           </div>

           <button
             className="btn btn-outline-dark px-3 ms-2"
             onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
           >
             <i className="fas fa-plus"></i>
           </button>
         </div>

         <p className="text-start text-md-center">
           <strong>$ {product.product.productPrice}</strong>
         </p>
       </div>
     </div>

     <hr className="my-4" />

     <div className="row">
       <div className="col-lg-3 col-md-12 mb-4 mb-lg-0"></div>
     </div>
   </div>
  )
}
