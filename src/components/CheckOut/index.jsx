import React from 'react'

import {connect} from 'react-redux';
import {selectCartItems, selectCartTotal, selectCartHidden} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../CheckOut-Item';

const CheckOut = ({cartItems,total}) => {
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckOut);