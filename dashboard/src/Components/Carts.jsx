import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from './Sidebar'
import { incrementQuantity, decrementQuantity, removeProduct } from '../redux/reducers/cartSlice'
import '../Carts.css'

function Carts() {
  const cartItems = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className='layout'>
      <Sidebar />

      <div className='cart-wrapper'>
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className='cart-card'>

                <div className='cart-info'>
                  <h4>{item.name}</h4>
                  <p>₹{item.price} each</p>
                </div>

                <div className='cart-controls'>
                  <button className='qty-btn' onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                  <span className='qty-number'>{item.quantity}</span>
                  <button className='qty-btn' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
                <p className='cart-subtotal'>₹{item.price * item.quantity}</p>
                <button  className="remove-btn" onClick={() => dispatch(removeProduct(item.id))}>Remove</button>              
              </div>
            ))}

            <div className='cart-summary'>
              <h3>Total: ₹{totalPrice}</h3>
              <button className='pay-btn' onClick={() => alert(`Payment of ₹${totalPrice} successful!`)}>
                Pay Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Carts