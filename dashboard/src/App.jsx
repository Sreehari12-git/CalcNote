import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Functionalities from './Components/Functionalities'
import About from './Components/About'
import Home from './Components/Home'
import ProtectedRoute, { LoginRoute } from './Components/ProtectedRoute'
import Password from './Components/Password'
import NotFound from './Pages/NotFound'
import Products from './Components/Products'
import ProductDetails from './Pages/ProductDetails'
import Carts from './Components/Carts'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginRoute />}/>
        <Route element = {<ProtectedRoute/>}>
         <Route path="/dashboard" element={<Dashboard />}>
         <Route index element={<Navigate to="home" replace/>}/>
          <Route path="home" element={<Home />} />
          <Route path="functionalities" element={<Functionalities />} />
          <Route path='password' element={<Password/>}/>
          <Route path='products' element={<Products/>}/>  
          <Route path="cart" element={<Carts />} />
          <Route path='products/:id' element={<ProductDetails/>}/>      
          <Route path="about" element={<About />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
