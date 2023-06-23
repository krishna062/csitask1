import React from 'react'
import './ContactStyles.css'
import users from "../assets/Users.png"
import ellipse5 from "../assets/Ellipse 5.png"
 const Contact= ()=> {
  return (
    <>
    <div className='contact-container'>
    
    <img src={ellipse5} alt='ellipse' className='ellipse'/>
    <img src={users} alt='users' className='users'/>
    <div className='contact-text'>
    <h1>Bize Ulaşın</h1>
    <p>Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle irtibata geçin.</p>
    </div>
    <a href='contact us'className='contact-btn'>Bize Ulaşın</a>

    </div>
    </>
  );
}

export default Contact;