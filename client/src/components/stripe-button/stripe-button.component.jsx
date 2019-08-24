import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

import CustomButton from '../custom-button/custom-button.component'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_nY7cLOmQWLKhsAq7bctsmJc900AnBWjeV0'

  const onToken = async token => {
    try {
      const res = await axios({
        url: 'payment',
        method: 'post',
        data: { amount: priceForStripe, token }
      })
      if (res.status === 200) {
        window.alert('Payment successful')
      }
    } catch (err) {
      console.error(err)
      window.alert('There was an issue with your payment.')
    }
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >
      <CustomButton blue>Pay Now</CustomButton>
    </StripeCheckout>
  )
}

export default StripeCheckoutButton
