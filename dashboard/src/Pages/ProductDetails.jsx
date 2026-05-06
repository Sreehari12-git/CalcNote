import React from 'react'
import "../ProductsDetails.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/cartSlice';
import { useNavigate } from 'react-router-dom';

function ProductDetails({ product, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }))
    navigate('/dashboard/cart');
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{product.name}</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <p className="modal-price">₹{product.price}</p>
          <p className="modal-description">{product.description}</p>
        </div>
        <div className="modal-footer">
          <button className="back-btn" onClick={onClose}>Back</button>
          <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;