import React from 'react';
import { connect } from 'react-redux';

const Cart = (props) => {
    let { cartProducts, dispatch } = props;
    console.log(cartProducts, 'Cart Product')

    return (
        <div className='container'>
            <div className='cart-div'>
                <h1>
                    My Cart: ({cartProducts.length})
                </h1>

                {
                    !!cartProducts.length && <div>Ashot</div>
                }
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        cartProducts: [...state.cartProducts]
    }
}

export default connect(mapStateToProps)(Cart);
