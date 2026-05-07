import { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux'


function App() {

  const themeMode = useSelector((state) => state.theme.mode)

  useEffect(() => {
    const root = document.documentElement;

    if(themeMode === "system") {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
    } else {
      root.setAttribute('data-theme', themeMode)
    }
  }, [themeMode])

    useEffect(() => {
    if (themeMode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [themeMode])

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
          <Route path='products/:id' element={<ProductDetails/>}/>
          <Route path="cart" element={<Carts />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
