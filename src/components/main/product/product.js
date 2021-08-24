import React from "react";
import './product.css'

function Product(props) {
    let { product, data } = props;
    let { dispatch } = data;

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
                    <p className='product-desc-wrapper'>
                        {product.Description}
                    </p>
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
                <button onClick={() => {
                    if (data.cartProducts.find(item => item.Id === product.Id)) return;
                    dispatch({ type: 'ADD_TO_CART', payload: { selectedProduct: product } });
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product;