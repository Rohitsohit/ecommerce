import React from "react";
import { Link } from 'react-router-dom'
import Profileview from './ProfileView'
export default function Navbar() {

    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Your Brand</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
      
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <Link className="navbar-brand" to='/cart'>
        <button type="button" className="btn btn-outline-dark mx-2">Cart</button>
      </Link>
      
      <Profileview />
    </div>
  </div>
</nav>

    </>
  )
}
