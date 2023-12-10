import React, { useEffect } from "react";
import CartItems from "./CartItems";
import { useSelector,useDispatch } from "react-redux";
import { getCartProducts } from "../../actions/product";
export default function Cart() {

  const dispatch = useDispatch();

  const cartProduct = useSelector((state) => state.cartProductRed);
  const user =JSON.parse(localStorage.getItem("profile-shoper"))
  if(user){
    var userEmail = user.data.data.myUser.email;
  }

  useEffect(() => {
    dispatch(getCartProducts({userEmail}));
  },[]);


  return (
    <div>
      <CartItems></CartItems>
    </div>
  );
}
