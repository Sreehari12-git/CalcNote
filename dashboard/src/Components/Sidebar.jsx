import React from 'react';

function Sidebar({ activeItem, setActiveItem }) {
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
        onClick={() => setActiveItem("Carts")}
      >
        Carts
      </div>
    </div>
  );
}

export default Sidebar;