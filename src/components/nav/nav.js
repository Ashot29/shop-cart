import React from "react";
import { Link } from "react-router-dom";
import './nav.css'

function Nav() {
  return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/cart'>My Cart</Link></li>
            </ul>
            <div className='cart'><Link to='/cart'>Cart({0})</Link></div>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
