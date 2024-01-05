import React from "react";
import Productview from "./Components/Productsviews";
import {  useDispatch } from "react-redux";
import { useEffect } from "react";
import {getProducts} from "./actions/product";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AUTH from './Components/Auth/Register'
import Signin from "./Components/Auth/Login";
import ProductDetails from "./Components/showDetails/ProductDetails";
import CheckOutSuccess from "./Components/Stripe/CheckOutSuccess";
const App = () => {
  const dispatch =useDispatch();
  
  useEffect(()=>{
    dispatch(getProducts());
    // to run my backend because my render make the backend inactive.
    // const newLink = 'https://ecomerce-backend-7c5j.onrender.com/';
    // window.open(newLink, '_blank', 'noopener,noreferrer');
  },[]);
  
  return (     
  <>
  <Router>
  <Navbar/>
      <Routes>
      <Route path="/" exact element={<Productview/> } />
      </Routes>
      <Routes>
      <Route path="/register" exact element={<AUTH/> } />
      </Routes>
      <Routes>
      <Route path="/cart" exact element={<Cart/>} />
      </Routes>
      <Routes>
      <Route path="/login" exact element={<Signin/> } />
      </Routes>
      <Routes>
      <Route path="/checkout-success" exact element={<CheckOutSuccess/> } />
      </Routes>
      <Routes>
      <Route path="/productdetails/:id" exact element={<ProductDetails/> } />
      </Routes>
  </Router>
   
  
  </>
  );
};

export default App;