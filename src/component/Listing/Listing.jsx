import React, { useContext } from 'react'
import "./Listing.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { dataContext } from '../../Context/Usercontext';

function Listing() {


  let {
    title,
    setTitle,
    addListing,
    setaddListing,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setprice
  }=useContext(dataContext)

  return (
    <div id='listing'
       onSubmit={(e)=>{
        e.preventDefault()
      alert("Add Listing successfully...")
      setaddListing(true)
    }}>


           <form action="">
              <span id='listingtitle'>Add Your Listing</span>
      
              <div className="list">
              <label htmlFor="title">Title</label>
              <input type="text" name="" id="title" required onChange={(e)=>{
                setTitle(e.target.value)
              }}value={title}/>
              </div>
      
              <div className="list">
              <label htmlFor="des">Description</label>
              <textarea name="" id="des"></textarea>
              </div>
      
              <div className="list">
              <label htmlFor="img1">Image1</label>
              <input type="file" name="" id="img1" required className='imginput' onChange={(e)=>{
                setaddImage1(e.target.files[0])
              }}/>
              </div>
      
              <div className="list">
              <label htmlFor="img2">Image2</label>
              <input type="file" name="" id="img2" required className='imginput' onChange={(e)=>{
                setaddImage2(e.target.files[0])
              }}/>
              </div>
      
              <div className="list">
              <label htmlFor="img3">Image3</label>
              <input type="file" name="" id="img2" required className='imginput' onChange={(e)=>{
                setaddImage3(e.target.files[0])
              }}/>
              </div>
      
              <div className="list">
              <label htmlFor="price">Price</label>
              <input type="text" name="" id="price" required onChange={(e)=>{
                setprice(e.target.value)
              }}value={price}/>
              </div>
      
              <div className="list">
              <label htmlFor="loc">Location</label>
              <input type="text" name="" id="loc"/>
              </div>
      
              <button id='listbtn'>Add<IoIosAddCircleOutline /></button>
      
            </form>



    </div>
  )
}

export default Listing
