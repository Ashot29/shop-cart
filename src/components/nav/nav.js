import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './nav.css'

function Nav(props) {
  let { cartProducts } = props; 
  return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/cart'>My Cart</Link></li>
            </ul>
            <div className='cart'><Link to='/cart'>Cart({cartProducts.length})</Link></div>
          </div>
        </div>
      </nav>
  );
}

function mapStateToProps(state) {
  return {
    cartProducts: [...state.cartProducts]
  }
}

export default connect(mapStateToProps)(Nav);
