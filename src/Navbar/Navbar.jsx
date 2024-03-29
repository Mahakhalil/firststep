import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = '/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = '/Products'>Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = '/Carts' >Carts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = '/Login' >Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = '/Register' >Register</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar