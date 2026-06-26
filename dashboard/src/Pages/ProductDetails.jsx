import React from 'react'
import "../ProductsDetails.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/reducers/cartSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

function ProductDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }))
    navigate('/dashboard/cart');
  }

  const { id } = useParams(); 

  const product = useSelector(state => state.product.items.find(p => p.id === Number(id)));

  if (!product) return null;

  return (
  <div style={{ display: 'flex', minHeight: '100vh' }}> 
    <Sidebar />                                            
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{product.name}</h2>
          <button className="close-btn" onClick={() => navigate(-1)}>X</button>
        </div>
        <div className="modal-body">
          <p className="modal-price">₹{product.price}</p>
          <p className="modal-description">{product.description}</p>
        </div>
        <div className="modal-footer">
          <button className="back-btn" onClick={() => navigate(-1)}>Cancel</button>
          <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
);
}

export default ProductDetails;