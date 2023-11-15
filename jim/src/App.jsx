import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './comp/First'
import Login from './comp/auth/login'
import Register from './comp/auth/Register'
import { Routes, Route } from "react-router-dom";
import Dashboard from './comp/Dashboard'



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
        <Route path='/dashboard' element={<Dashboard/>}/> 

      </Routes>

    </div>
  )
}

export default App
