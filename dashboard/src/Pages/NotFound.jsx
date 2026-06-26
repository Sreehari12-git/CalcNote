import React from 'react'
import './NotFound.css'

function NotFound() {
  return (
    <div className="nf-container">
      <p className="nf-code">404</p>
      <h1 className="nf-title">Page not found</h1>
      <p className="nf-subtitle">Sorry, we couldn't find the page you're looking for.</p>
    </div>
  )
}

export default NotFound