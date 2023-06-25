import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = ({cartLen,cartHandler}) => {
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Shoppingo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <a type="button" className="btn btn-primary ms-2" onClick={cartHandler} >
  Cart<span className="badge text-bg-secondary ms-1">{cartLen}</span>
</a>
    
      </ul>
    </div>
  </div>
</nav>
  </>
  );
}
