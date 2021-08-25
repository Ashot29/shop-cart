import React from "react";
import { DEFAULT_URL } from '../../../url/url'
import './product.css'

function Product(props) {
    let { product } = props;

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
                    fetch(`${DEFAULT_URL}/CartProducts/${product.id}`)
                        .then(resp => {
                            if (resp.status === 404) {
                                fetch(`${DEFAULT_URL}/CartProducts`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-type': 'application/json; charset=UTF-8'
                                    },
                                    body: JSON.stringify(product)
                                })
                            } else if (resp.status >= 200 && resp.status < 300) {
                                return resp.json()
                            }
                        })
                        .then(data => console.log(data))
                }}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product;