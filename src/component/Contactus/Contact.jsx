import React from 'react'
import "./Contact.css"
import { TbFileLike } from "react-icons/tb";

function Contact() {
  return (
    <div id='contact'>
      
      <form action="https://formspree.io/f/mnnvaeyn" method='POST'>
        <span id='contacttitle'>Contact Page</span>

        <div className="list">
        <label htmlFor="namel">UserName</label>
        <input type="text" name="username" id="name1" required/>
        </div>

        <div className="list">
        <label htmlFor="mail">Email</label>
        <input type="email" name="mail" id="mail" required/>
        </div>

        <div className="list">
        <label htmlFor="mess">Message</label>
        <textarea name="message" id="mess"></textarea>
        </div>

        <button id='contactbtn'>Submit<TbFileLike /></button>

      </form>

    </div>
  )
}

export default Contact
