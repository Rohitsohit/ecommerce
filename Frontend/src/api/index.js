import axios from "axios";
const API = axios.create({baseURL:'https://ecommerce-tawny-pi-19.vercel.app'})


export const fetchProducts=()=>API.get('/products');

export const fetchProductById=(id)=>API.get(`/products/${id}`);

export const getCartProduct = (formData)=> API.post('/products/cartProduct',formData);
export const addProduct = (formData)=>API.post('/products/addToCart',formData);
export const itemDelete = (formData)=>API.post('/products/itemDelete',formData);





export const signinData = (formData)=>API.post('/user/signin',formData);
export const signupData = (formData)=>API.post('/user/signup',formData);
