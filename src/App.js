import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Social from './components/Social'
const App = () => {
  return (

    <div className='APP'>
      
      <Navbar /> 
      <Header/>
      <About/>
      <Services/>
      <Programs/>
      <Testimonials/>
      <Contact/>
      <Social/>
    </div> 
    
  )
}

export default App
