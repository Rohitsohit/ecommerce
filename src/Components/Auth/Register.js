import React, { useState } from "react";
import { Link } from 'react-router-dom'

const initailState ={
    firstName :"",
    email:"",
    password:"",
    confirmPassword:""
  };

export default function Signup() {

    
      const [formData, setformData] = useState(initailState);
      const onChange=(e)=>{
        setformData({...formData,[e.target.name]: e.target.value})
    }
    const handleRegister=(e)=>{
      e.preventDefault();
    //   dispatch(signup(formData,history));
    }
    if(formData){
        console.log(formData);  
    }
  return (
    <section className="vh-100" style={{backgroundcolor: "#eee"}}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderradius: "25px"}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register Here...</p>
  
                  <form className="mx-1 mx-md-4">
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        <input type="text" id="firstName" name="firstName" onChange={onChange} className="form-control" />
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        <input type="email" id="email" name="email" onChange={onChange} className="form-control" />
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                        <input type="password" id="password" name="password" onChange={onChange} className="form-control" />
                      </div>
                    </div>
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" onClick={handleRegister} className="btn btn-primary btn-lg">Register</button>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    {/* <Link  to='/signin' >
                      <h6 >Already Register ? </h6>
                      </Link> */}
                    </div>
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  )
}
