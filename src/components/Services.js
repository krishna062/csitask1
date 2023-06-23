import React from 'react';
import arrow from "../assets/CaretCircleDoubleRight.png"
import bgimg from "../assets/bgimg.jpg"
import './Services.css'
function Services() {
  return (
    <div className='service-container'>
      <img src={bgimg} alt='' className='bgimg' />
      <div className='text-container'>
      <h1>Test Yönetimiyle Neler Sağlıyoruz?</h1>
      <p>IoT Destekli Çözümler</p>
      </div>
      <div className='objects'>

        <p>Yazılım Kalitesini
          Arttırıyoruz</p>

        <img src={arrow} alt="arrow" className='arrimg'/>

        <p>Olası Hataları Önceden
          Belirliyoruz</p>

        <img src={arrow} alt="arrow" className='arrimg' />

        <p>Oluşabilecek Riskleri
          Önlüyoruz</p>

        <img src={arrow} alt="arrow" className='arrimg' />

        <p>Zaman ve Maliyetten
          Tasarruf Sağlıyoruz</p>

      </div>


    </div>
  );
}

export default Services;