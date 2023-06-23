import React from 'react';
import "./AboutStyles.css";
import {CardComponent} from "./CardComponent";
import img1 from "../assets/image1.png"
import star from "../assets/Star.png"
import crown from "../assets/Crown.png"
import logs from "../assets/Group 11.png"
import pichart from "../assets/ChartPieSlice.png"
import logo from "../assets/FigmaLogo.png"

const About = ()=> {
  return (
    <div className="About">
      <h1 className='about-title'> Kalite ve Süreç Yönetimi</h1>
      <p className='about-text'>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
      <div className='card1'>
      <CardComponent 
      imgSrc={img1} 
      imgAlt=" card image"
      title="Döküman Analizi"
      description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
      />
       <CardComponent 
      
      imgSrc={star}
      imgAlt=" card image"
      title="Kabul ve Değerlendirme"
      description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
      />
       <CardComponent 
      imgSrc={crown} 
      imgAlt=" card image"
      title="İş Kuralları Analizi"
      description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
      />
      </div>
      <div className='card2'>
       <CardComponent 
      imgSrc={logs} 
      imgAlt=" card image"
      title="Akış Diyagramları"
      description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
      />
       <CardComponent 
      imgSrc={pichart} 
      imgAlt=" card image"
      title="Paydaş Analizi"
      description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
      />
       <CardComponent 
      imgSrc={logo} 
      imgAlt=" card image"
      title="Prototipleme"
      description="Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum."
      />

      </div>
    </div>
  );
}

export default About;