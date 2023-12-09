import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function ProfileView() {

    const [myuser, setuser] = useState(
        // JSON.parse(localStorage.getItem("profile-shoper"))
      );
      const handleLogOut = () => {
        // dispatch({ type: "LOGOUT" });
        // history("/");
        // setuser(null);
      };
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
            <button type="button mx-3" className="btn btn-dark">
              SignIn
            </button>
          </Link>
        
        </>
      );
}
