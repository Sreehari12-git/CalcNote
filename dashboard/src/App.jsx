import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Pages/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Functionalities from './Components/Functionalities'
import About from './Components/About'
import Home from './Components/Home'
import ProtectedRoute, { LoginRoute } from './Components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="" element={<LoginRoute />} />
        <Route element = {<ProtectedRoute/>}>
         <Route path="/dashboard" element={<Dashboard />}>
          <Route path='*' element={<Navigate to="/dashboard" replace/>}/>
          <Route path="home" element={<Home />} />
          <Route path="functionalities" element={<Functionalities />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
