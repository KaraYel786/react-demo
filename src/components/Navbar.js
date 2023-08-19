import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
return (
  <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary mx-2" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
  </nav>   
  </>
  );
}

Navbar.propTypes ={
  title: PropTypes.string.isRequired,
  home: PropTypes.string
}
Navbar.defaultProps = {
  title: "set Tile here",
  home: "set here"
}