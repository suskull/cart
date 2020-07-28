import React from 'react';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';


import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';


const CartDropDown = ({cartItems,history,dispatch}) => {

    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {   cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    : <span className ='emty-message'>Your cart is emty</span>
                }
            </div>
            <CustomButton onClick ={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>CHECK OUT</CustomButton>
        </div>
    )
}
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropDown));