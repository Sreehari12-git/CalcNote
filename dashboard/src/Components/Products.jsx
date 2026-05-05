import React, { useState } from 'react'
import "../Products.css"
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProductDetails from '../Pages/ProductDetails';

function Products() {
    const[activeItem, setActiveItem] = useState("Products");

    const[selectedProduct,setSelectedProduct] = useState(null);

   const products = [
        {id: 1, name: "Basket Ball", price: 500, description: "High quality basketball for outdoor play"},
        {id:2, name: "Football", price: 800, description: "Durable football suitable for all surfaces"},
        {id:3, name: "Cricket bat",  price: 1200, description: "Lightweight wooden bat for professional play"}
    ]
  return (
    <>
      <div className='layout'>
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/>
      <div className='products-container'>
        <div className='sports'>
            {activeItem === "Products" && (
                <>
                    <h2>Sports</h2>
                    <ul>
                        {products.map((product) => 
                            <li key={product.id}>
                                <button onClick={() => setSelectedProduct(product)}>{product.name}</button>
                            </li>
                        )}
                    </ul>
                </>
            )}
        </div>
      </div>
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={()=>setSelectedProduct(null)}/>
      )}
    </div>
      
    </>
  )
}

export default Products
