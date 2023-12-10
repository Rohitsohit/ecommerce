import * as api from "../api";
import { FETCH_ALL,CART,CARTDATA } from "../constant";


export  const getProducts = () => async (dispatch) => {
     try {
       const { data } = await api.fetchProducts();
       dispatch({ type: FETCH_ALL, payload: data });
     } catch (error) {
       console.log(error);
     }
   };


   export const addProduct=(formData)=>async(dispatch)=>{
        try {
             const {data} = await api.addProduct(formData);
             dispatch({type:CART,cartData:data});
        } catch (error) {
             console.log(error);
        }
   }



export  const getCartProducts = (formData) => async (dispatch) => {
     try {
       const { data } = await api.getCartProduct(formData);
       dispatch({ type: CARTDATA, cartProduct: data });
     } catch (error) {
       console.log(error);
     }
   };


   export  const getItemDelete = (formData) => async (dispatch) => {
    try {
       await api.itemDelete(formData);
     
    } catch (error) {
      console.log(error);
    }
  };



