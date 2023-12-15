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
const App = () => {
  const dispatch =useDispatch();
  
  useEffect(()=>{
    dispatch(getProducts());
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
      <Route path="/productdetails/:id" exact element={<ProductDetails/> } />
      </Routes>
  </Router>
   
  
  </>
  );
};

export default App;