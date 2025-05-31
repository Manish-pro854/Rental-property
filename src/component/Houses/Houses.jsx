import React from 'react'
import "./Houses.css"
import Card from '../Card/Card'
import air1 from "../../assets/air1.avif"
import air2 from "../../assets/air2.avif"
import air3 from "../../assets/air3.avif"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa2 from "../../assets/villa3.jpg"
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"

function Houses() {
  return (
    <div id='houses'>
     <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Delhi"} price={"2,000"}/>
     <Card image1={villa} image2={villa1} image3={villa2} title={"3BHK Villa in Delhi"} price={"2,000"}/>
     <Card image1={room} image2={room1} image3={room2} title={"3BHK Villa in Delhi"} price={"2,000"}/>
     <Card image1={air1} image2={air2} image3={air3} title={"3BHK Villa in Delhi"} price={"2,000"}/>
    </div>
  )
}

export default Houses
