import React from 'react'
import Section from '../components/Section'
import WasteImage from '../assets/waste.png'
import Pickup from '../components/Pickup'
import Plot from '../components/Plot'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import About from '../components/About';
import FormWaste from '../components/FormWaste'
import FormLocation from '../components/FormLocation'


export function Waste(){
    return (
      <div>
       <Navbar />
               <Section 
            image={WasteImage}
            judul="Mari Berkenalan"
            title="Waste Wise"
            description="Angkut Sampahmu demi lingkungan yang tercinta kita tetap terjaga! Dengan fitur ini, kami berharap dapat membantu masyarakat lebih mudah dalam mengelola sampah, sehingga lingkungan tercinta tetap terjaga dan bebas dari pencemaran. Bersama FoodWise, mari wujudkan Indonesia yang lebih bersih dan sehat!"
        />
        <Pickup /> 
        <Plot />
        <Button
        nameButton={"Mulai Angkut"}
        /> 
        {/* <FormWaste /> */}
        {/* <FormLocation/> */}
        <Footer />

       </div>
    )
  }
