import * as api from "../api";
// import { AUTH } from "../constant";

export const signin=async(formData)=>{

     try {
           
          const data = await api.signinData(formData);
          console.log(data);
          // dispatch({type:AUTH,data});
          // history('/');
     } catch (error) {
          console.log(error);
     }
}

export const signup = async(formData) =>  {
     try {
       const { data } = await api.signupData(formData);
       console.log(data);
     //   dispatch({ type: AUTH, data });
      //  history("/");
     } catch (error) {
       console.log(error);
     }
   };

