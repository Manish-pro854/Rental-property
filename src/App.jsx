import React from 'react'
import "./App.css"
import Nav from './component/Nav/Nav'
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Signup from './component/Signup/Signup'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App
