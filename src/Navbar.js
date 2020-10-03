import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper indigo darken-4">
        <div className="container">
          <a href="#" className="brand-logo">
            City Tour
          </a>
          <a href="#" className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">City</a>
            </li>
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <a href="#">Photo's</a>
            </li>
          </ul>
          <ul className="sidenav" id="mobile-menu">
            <li>
              <a href="#">City</a>
            </li>
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <a href="#">Photo's</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
