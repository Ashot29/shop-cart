import React, { useState, useEffect } from "react";
import { DEFAULT_URL } from "../../url/url";
import { Link } from "react-router-dom";
import './nav.css'

function Nav() {
  let [cart, setCart] = useState([])

  useEffect(() => {
    fetch(`${DEFAULT_URL}/CartProducts`)
    .then(resp => resp.json())
    .then(data => {
        setCart([...data]);
    })
}, []);

  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/cart'>My Cart</Link></li>
          </ul>
          <div className='cart'><Link to='/cart'>Cart({cart.length})</Link></div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
