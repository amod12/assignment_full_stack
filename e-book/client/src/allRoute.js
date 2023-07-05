import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from './sharedScreen/register';
import Login from './sharedScreen/login';

const AllRoute = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default AllRoute
