import axios from "axios";
const API = axios.create({baseURL:'http://localhost:5000'})


// export const fetchProducts=()=>API.get('/products');
// export const getCartProduct = (formData)=> API.post('/products/cartProduct',formData);
// export const addProduct = (formData)=>API.post('/products/addToCart',formData);
// export const itemDelete = (formData)=>API.post('/products/itemDelete',formData);


export const signinData = (formData)=>API.get('/user/signin',formData);
export const signupData = (formData)=>API.post('/user/signup',formData);
