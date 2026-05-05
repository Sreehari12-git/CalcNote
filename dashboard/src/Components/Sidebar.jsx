import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar({ activeItem, setActiveItem }) {
  const navigate = useNavigate();
  return (
    <div className='sidebar'>
      <div
        className={`sidebar-item ${activeItem === "Products" ? "active-sidebar" : ""}`}
        onClick={() => setActiveItem("Products")}
      >
        Products
      </div>

      <div
        className={`sidebar-item ${activeItem === "Carts" ? "active-sidebar" : ""}`}
        onClick={() => { setActiveItem("Carts"); navigate("/dashboard/cart");} }
      >
        Carts
      </div>
    </div>
  );
}

export default Sidebar;