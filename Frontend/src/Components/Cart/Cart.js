import React,{ useEffect, useState } from "react";
import Items from "./Items";
import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import CartFooter from "./CartFooter";
import CartEmpty from "./CartEmpty";
import { useDispatch } from "react-redux";
import { getCartProducts } from "../../actions/product";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cartProductRed);

  const user = JSON.parse(localStorage.getItem("profile-shoper"));
  const userEmail = user ? user.data.data.myUser.email : null;
  
  useEffect(() => {
    dispatch(getCartProducts({ userEmail }));
  },[]); 

  var price = []
  var productName = []
  var totalPrice = 0;

  cartProduct.forEach(element => {
    var productPrice = parseInt(element.productPrice)
    totalPrice = totalPrice + productPrice;
   
    price.push(productPrice);
  });

  cartProduct.forEach(element => {
    productName.push(element.productName);
  });



  return !cartProduct ? (
    <>
      <CartEmpty />
    </>
  ) : (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">{`Cart - ${cartProduct.length} items`}</h5>
                </div>
              </div>
              {/* items maping  */}

              {cartProduct.map((product) => (


                <Items product={product} />

              ))}

              <CartFooter />
            </div>
            {/*cart summary  */}

            <CartSummary price={price} totalPrice={totalPrice} productName={productName} cartProduct={cartProduct} />
            
          </div>
        </div>
      </section>
    </>
  );
}
