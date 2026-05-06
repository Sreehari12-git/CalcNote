import React, { useState } from 'react'
import Sidebar from './Sidebar';
import ProductDetails from '../Pages/ProductDetails';
import '../Products.css'

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Basket Ball", price: 500, description: "High quality basketball for outdoor play" },
    { id: 2, name: "Football", price: 800, description: "Durable football suitable for all surfaces" },
    { id: 3, name: "Cricket bat", price: 1200, description: "Lightweight wooden bat for professional play" }
  ]

  return (
    <div className='layout'>
      <Sidebar />
      <div className='products-container'>
        <div className='sports'>
          <h2>Sports</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <div className='product-card'>
                  <div className='product-info'>
                    <h4>{product.name}</h4>
                    <p>₹{product.price}</p>
                  </div>
                  <button className='view-btn' onClick={() => setSelectedProduct(product)}>
                    View Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}

export default Products