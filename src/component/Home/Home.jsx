import React from 'react'
import "./Home.css"
import Card from '../Card/Card'
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
import farmhouse from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse2 from "../../assets/farmhouse.jpg"
import air1 from "../../assets/air1.avif"
import air2 from "../../assets/air2.avif"
import air3 from "../../assets/air3.avif"
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain2.avif"
import mountain3 from "../../assets/mountain3.avif"
import old1 from "../../assets/old1.avif"
import old2 from "../../assets/old2.avif"
import old3 from "../../assets/old3.avif"
import roomhouse1 from "../../assets/roomhouse1.avif"
import roomhouse2 from "../../assets/roomhouse2.avif"
import roomhouse3 from "../../assets/roomhouse3.avif"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"
import roomnew3 from "../../assets/roomnew3.avif"
import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"
import village1 from "../../assets/village1.avif"
import village2 from "../../assets/village2.avif"
import village3 from "../../assets/village3.avif"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa2 from "../../assets/villa3.jpg"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"


function Home() {
  return (
    <div id='home'>
      <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK FarmHouse in Gurugram"} price={"6,000"}/>
      <Card image1={old1} image2={old2} image3={old3} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={roomhouse1} image2={roomhouse2} image3={roomhouse3} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={ski} image2={ski1} image3={ski2} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={villa} image2={villa1} image3={villa2} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      
      <Card image1={village1} image2={village2} image3={village3} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={room} image2={room1} image3={room2} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={roomnew1} image2={roomnew2} image3={roomnew3} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={mountain1} image2={mountain2} image3={mountain3} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={hut1} image2={hut2} image3={hut3} title={"3BHK Villa in Delhi"} price={"2,000"}/>
      <Card image1={air1} image2={air2} image3={air3} title={"3BHK Villa in Delhi"} price={"2,000"}/>
    </div>
  )
}

export default Home
