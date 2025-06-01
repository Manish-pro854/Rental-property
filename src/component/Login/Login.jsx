import React from 'react'
import "./Login.css"
import { MdLogin } from "react-icons/md";

function Login() {
  return (
    <div id='login' onSubmit={(e)=>{
      alert("Login successfully...")
    }}>

      <form action="">
        <span id='logintitle'>Login Page</span>

        <div className="list">
        <label htmlFor="email">Email</label>
        <input type="text" name="" id="email" required/>
        </div>

        <div className="list">
        <label htmlFor="pass">Password</label>
        <input type="password" name="" id="pass" required/>
        </div>

        <button id='loginbtn'>Login<MdLogin /></button>

      </form>
    </div>
  )
}

export default Login
