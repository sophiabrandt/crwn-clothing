import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
require('dotenv').config()

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = process.env.STRIPE_PK

  const onToken = token => {
    console.log({ token })
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
