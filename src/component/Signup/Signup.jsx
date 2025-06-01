import React from 'react'
import "./Signup.css"
import { MdOutlinePersonAddAlt1 } from "react-icons/md";

function Signup() {
  return (
    <div id='signup'>
      
        <form action="">
        <span id='signuptitle'>Sign Up Page</span>

        <div className="list">
        <label htmlFor="name">UserName</label>
        <input type="text" name="" id="name" required/>
        </div>

        <div className="list">
        <label htmlFor="email">Email</label>
        <input type="text" name="" id="email" required/>
        </div>

        <div className="list">
        <label htmlFor="pass1">Password</label>
        <input type="password" name="" id="pass1" required/>
        </div>

        <div className="list">
        <label htmlFor="conpass1">Conform Password</label>
        <input type="password" name="" id="conpass1" required/>
        </div>

        <button id='signupbtn'>Signup<MdOutlinePersonAddAlt1 /></button>

      </form>

    </div>
  )
}

export default Signup
