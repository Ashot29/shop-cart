import React from 'react';
import { connect } from 'react-redux';
import './cart.css'

const Cart = (props) => {
    let { cartProducts, totalQuantity, totalPrice, dispatch } = props;

    return (
        <div className='container' >
            <div className='cart-div' >
                <h1 >My Cart({cartProducts.length}): </h1>

                {
                    !!cartProducts.length &&
                    <form id='cart-form' onSubmit={(event) => {
                        event.preventDefault();
                        let inputs = Array.from(document.getElementsByClassName('quantity-input'));
                        console.log(inputs)
                    }}>
                        <table className='cart-table' >
                            <thead className='cart-table-head' >
                                <tr className='row-1 gray-row'>
                                    <th className='table-head-number table-number'>#</th>
                                    <th className='table-head-name table-name'>Name</th>
                                    <th className='table-head-price table-price'>Price</th>
                                    <th className='table-head-quantity table-quantity'>Quantity</th>
                                </tr>
                            </thead>
                            <tbody className='cart-table-body' >
                                {
                                    cartProducts.map((cartProduct, index) => {
                                        return (
                                            <tr className={'row-' + (index + 1)} key={index}>
                                                <td className='table-number'>{index + 1}</td>
                                                <td className='table-name'>{cartProduct.Title}</td>
                                                <td className='table-price'>${cartProduct.Price}</td>
                                                <td className='table-quantity'>
                                                    <input type='number' className="quantity-input" defaultValue='1' min='1' data-price={cartProduct.Price} />
                                                    <button className='quantity-changer' data-id={cartProduct.Id} data-price={cartProduct.Price} onClick={(event) => {
                                                        event.preventDefault();
                                                        let id = event.target.dataset.id;
                                                        cartProducts.forEach((item, index, array) => {
                                                            if (item.Id === id) {
                                                                array.splice(index, 1)
                                                            }
                                                        })
                                                        dispatch({type: 'REMOVE_FROM_CART', payload: {cartProducts}})
                                                    }}>
                                                        X 
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot className='cart-table-foot' >
                                <tr className='gray-row'>
                                    <td></td>
                                    <td><b>Subtotal</b></td>
                                    <td><b>${0}</b></td>
                                    <td><b>{0} items</b></td>
                                </tr>
                            </tfoot>
                        </table>
                        <button className='updating-button'>Update cart!</button>
                    </form>
                }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice,
        cartProducts: [...state.cartProducts],
    }
}

export default connect(mapStateToProps)(Cart);