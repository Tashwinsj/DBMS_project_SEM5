import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './comp/First'
import Login from './comp/auth/Login'
import Register from './comp/auth/Register'
import { Routes, Route } from "react-router-dom";
import Dashboard from './comp/Dashboard'
import Memship from './comp/Memship'
import Equipment from './comp/Equipment'
import Bookclass from './comp/Bookclass'
import Analytics from './comp/Analytics'
import Booking from './comp/Booking' 




function App() {
 

  fetch('http://localhost:5004/home')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data.message))
  .catch(error => console.error('Error:', error));
    


  return (
    <div className='h-screen w-screen'>
      <Routes>
        <Route path='/' element={<First/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/> 
        <Route path='/dashboard/:id' element={<Dashboard/>}/> 
        <Route path='/membership/:id' element={<Memship  />}/> 
        <Route path='/equipments/:id' element={<Equipment  />}/> 
        <Route path='/bookclass' element={<Bookclass  />}/> 
        <Route path='/analytics' element={<Analytics  />}/> 
        <Route path='/book/:id' element={<Booking  />}/> 

      </Routes>

    </div>
  )
}

export default App
