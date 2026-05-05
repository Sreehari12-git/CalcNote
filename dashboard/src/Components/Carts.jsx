import React from 'react'
import { useSelector } from 'react-redux'

function Carts() {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item,index) => (
          <div key={index}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
          </div>
        ))
      ) 
      }
    </div>
  )
}

export default Carts
