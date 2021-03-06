import React from "react";
import { connect } from "react-redux";
import Product from "./product/product";
import "./main.css";

function Main(props) {
  let { products } = props;

  return (
    <main>
      <div className="container">
        <h2 className="main-header">Product List</h2>
        <div className="main-content-products">
          {!!products.length && products.map(product => <Product key={product.id} product={product} data={props}/>)}
        </div>
      </div>
    </main>
  );
}

function mapStateToprops(state) {
  return {
    products: [...state.products],
  };
}

export default connect(mapStateToprops)(Main);