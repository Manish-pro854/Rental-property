import React from 'react'
import "./Card.css"

function Card({image1,image2,image3,title,price}) {
  return (
    <div className='card'>

     <div className="images">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
     </div>

     <div className="cardspan1">{title}</div>
     <div className="cardspan2">${price}/Month</div>

    </div>
  )
}

export default Card
