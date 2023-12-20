import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profileview() {
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [myuser, setuser] = useState(
    JSON.parse(localStorage.getItem("profile-shoper"))
  );

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    history("/");
    setuser(null);
  };

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("profile-shoper")));
  }, [location]);


  return myuser ? (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">{`Hi , ${myuser.data.data.myUser.name}`}</a>
        <button
          type="button mx-3"
          className="btn btn-dark"
          onClick={handleLogOut}
        >
          LogOut
        </button>
      </div>
    </nav>
  ) : (
    <>
      <Link to="/login">
        <button type="button mx-3" className="btn btn-outline-dark">
          Log In 
        </button>
      </Link>
    
    </>
  );
}
