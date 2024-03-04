import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Components/Home/Home'
import Products from '../Components/Product/Products'
import Carts from '../Components/Carts/Carts'
import Signin from '../Components/Login/Login'
import Signup from '../Components/Register/Register'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <Navbar/>
        <Outlet/>
       
    </>
  )
}

export default Root