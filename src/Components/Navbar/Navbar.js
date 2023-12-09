import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Link } from 'react-router-dom'
import ProfileView from "./ProfileView";

export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Shopper</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <form className="d-flex w-25" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link className="navbar-brand" to='/cart'>
              <button type="button"
                className="btn btn-dark mx-5" >Cart</button>
            </Link>
            <ProfileView></ProfileView>
    
          </div>
        </div>
      </nav>
    </>
  )
}
