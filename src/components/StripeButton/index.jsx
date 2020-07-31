import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const puslishableKey = 'pk_test_51GsnIGEFHclC6JmJfWrKhW8o8crPGvzDpYND4GiCRqSjCHGCtxGS6uPk5fegZRW1tLkZKColY8GPaEkE0QWIVjrd00KxQZEivj'


    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }
    return ( 
        <StripeCheckout 
            label='Pay Now'
            name='Cart Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel ='Pay Now'
            token= {onToken}
            stripeKey={puslishableKey}

        />
    )


}

export default StripeCheckoutButton;