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
      dispatch(addToCart(product))
      navigate('/dashboard/cart');      
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>Back</button>
                <h1>{product.name}</h1>
                <p className="price">Price: ₹{product.price}</p>
                <p className="description">{product.description}</p>  
                <button className="cart-btn" onClick={handleAddToCart} >
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;