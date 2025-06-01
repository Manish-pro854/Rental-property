import React from 'react'
import "./App.css"
import Nav from './component/Nav/Nav'
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Signup from './component/Signup/Signup'
import { Outlet } from 'react-router-dom'
import Listing from './component/Listing/Listing'
import Contact from './component/Contactus/Contact'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
