import React from "react";
import './nav.css'

function Nav() {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>My Cart</a></li>
          </ul>
          <div className='cart'><a href=''>Cart({0})</a></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
