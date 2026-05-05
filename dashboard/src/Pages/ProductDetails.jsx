import React from 'react'
import Sidebar from '../Components/Sidebar';
import "../ProductsDetails.css"

function ProductDetails({product, onClose}) {
    if (!product) return null;

 return (
  <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Back</button>
        <h1>{product.name}</h1>
        <p className="price">Price: ₹{product.price}</p>
        <p className="description">{product.description}</p>
        <button className="cart-btn" >Add to cart</button>
      </div>
    </div>
);
}

export default ProductDetails
