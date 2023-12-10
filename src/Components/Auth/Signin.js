import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {signin} from "../../actions/user"
const initailState ={
  email:"",
  password:"",
};
export default function Signin() {
  const [formData, setformData] = useState(initailState);
  const history = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e)=>{
    setformData({...formData,[e.target.name]: e.target.value});
  }

  const Handlesingin=(e)=>{
    e.preventDefault();
    dispatch(signin(formData,history));
  }


  return (
    <>
      <section className="vh-100 mx-5">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={onChange}
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={onChange}
                    className="form-control form-control-lg"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={Handlesingin}>
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
