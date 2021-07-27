import React from "react";
import './product.css'

function Product(props) {
    let { product } = props 
    console.log(props, product)
  return (
    <div className="product-wrapper">
      <div className="product-header">
        <h2>{product.Title}</h2>
      </div>
      <div className="product-body">
        <div className="product-image">
          <img src={product.ImageUrl} />
        </div>
        <div className="product-desc">
          {product.Description.slice(0, 150)}..
        </div>
        <div className="product-category">
          <b>Category:</b> {product.Category}
        </div>
        <div className="product-maker">
          <b>Made By:</b> {product.Manufacturer}
        </div>
        <div className="product-organic">
          <b>Organic:</b> {String(product.Organic)}
        </div>
        <div className="product-price">
          <b>Price:</b> {product.Price}$
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
