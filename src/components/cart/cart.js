import { useState, useEffect } from 'react';
import { DEFAULT_URL } from '../../url/url';
import './cart.css'

const Cart = () => {
    let [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`${DEFAULT_URL}/CartProducts`)
        .then(resp => resp.json())
        .then(data => {
            setCart([...data])
            console.log(data);
        })
    }, []);


    return (
        <div className='container' >
            <div className='cart-div' >
                <h1 >My Cart({0}): </h1>

                {
                    !!cart.length &&
                    <form id='cart-form' onSubmit={(event) => {
                        event.preventDefault();
                        console.log(1)
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
                                    cart.map((cartProduct, index) => {
                                        return (
                                            <tr className={'row-' + (index + 1)} key={index}>
                                                <td className='table-number'>{index + 1}</td>
                                                <td className='table-name'>{cartProduct.Title}</td>
                                                <td className='table-price'>${cartProduct.Price}</td>
                                                <td className='table-quantity'>
                                                    <input type='number' className="quantity-input" defaultValue='1' min='1'/>
                                                    <button className='quantity-changer'onClick={(event) => {
                                                        event.preventDefault();
                                                        fetch(`${DEFAULT_URL}/CartProducts/${cartProduct.id}`, {
                                                            method: 'DELETE'
                                                        })
                                                        .then(resp => {
                                                            if (resp.statusText === 'OK') {
                                                                let arr = [...cart];
                                                                arr.forEach((item, index) => {
                                                                    if (item.id === cartProduct.id) {
                                                                        arr.splice(index, 1)
                                                                    }
                                                                })
                                                                setCart(arr)
                                                            }
                                                        })
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

export default Cart;