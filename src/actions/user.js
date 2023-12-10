import * as api from "../api";
import { AUTH } from "../constant";

export const signin=(formData, history)=>async(dispatch)=>{

     try {
          const data = await api.signinData(formData);
          dispatch({type:AUTH,data});
          history('/');
     } catch (error) {
          console.log(error);
     }
}

export const signup = (formData, history) => async(dispatch) => {
     try {
       const { data } = await api.signupData(formData);
       dispatch({ type: AUTH, data });
       history("/");
     } catch (error) {
       console.log(error);
     }
   };

