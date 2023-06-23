import React from 'react'
import './Testimonials.css'
import logos from "../assets/Logos.png"

const Testimonials= ()=> {
  return (
    <>
    <div className='testimonials'>
        <h1>Referanslarımız</h1>
        <p>Bize güvenen ve beraber çalıştığımız iş ortaklarımız</p>
        <img src={logos} alt='logo' className='logo-img'/>
    </div>
    </>
  )
}

export default Testimonials;