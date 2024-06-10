import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Popular's Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Popular's Mouse"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photograpy"}/>
      <VerticalCardProduct category={"televisions"} heading={"Popular's Televisions"}/>
      <VerticalCardProduct category={"earphones"} heading={"Popular's Earphones"}/>
      <VerticalCardProduct category={"printers"} heading={"Popular's Printers"}/>
      <VerticalCardProduct category={"processor"} heading={"Processor"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerators"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Popular's Trimmers "}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>


    </div>
  )
}

export default Home
