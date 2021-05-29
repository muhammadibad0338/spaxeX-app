import React from 'react'
import {Link } from "react-router-dom";

const Header = () => {
  return (
    <>
     

      <nav className="navbar navbar-expand-lg  navbar navbar-dark  " style={{ backgroundColor: "Black" }} >
        <Link to="/" className="navbar-brand" style={{ color: "White" }}>SpaceX</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collanpse navbar-collapse flex-row-reverse" id="navbarNav" style={{ marginRight: "150px" }}>
          <ul className="navbar-nav ">
            <li className="nav-item active">
            <Link className="nav-link" to="/" style={{color:"White"}}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/launch" style={{color:"White"}}>Launch</Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
