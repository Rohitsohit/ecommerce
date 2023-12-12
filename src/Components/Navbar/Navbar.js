import React from "react";
import { Link } from 'react-router-dom'
import Profileview from './ProfileView'
export default function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
            </ul>
            <form className="d-flex w-25" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link className="navbar-brand" to='/cart'>
              <button type="button"
                className="btn btn-outline-dark mx-5" >Cart</button>
            </Link>
            <Profileview ></Profileview>

          </div>
        </div>
      </nav>
    </>
  )
}
