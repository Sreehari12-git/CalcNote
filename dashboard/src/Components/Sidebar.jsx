import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeItem = location.pathname.includes("cart") ? "Carts" : "Products";
  return (
    <div className='sidebar'>
      <div
        className={`sidebar-item ${activeItem === "Products" ? "active-sidebar" : ""}`}
        onClick={() => navigate("/dashboard/products")}
      >
        Products
      </div>

      <div
        className={`sidebar-item ${activeItem === "Carts" ? "active-sidebar" : ""}`}
        onClick={() =>  navigate("/dashboard/cart") }
      >
        Carts
      </div>
    </div>
  );
}

export default Sidebar;