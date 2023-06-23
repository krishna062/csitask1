import React from 'react';
// import Navbar from '../components/Navbar';
import "./HeaderStyles.css";
import HeaderImg from "../assets/header.png"
import InputImg from "../assets/mailInput.png"
function Header () {
  return (
    <>
    
    <div className="Header">
    
    <img alt="Heroimg" src={HeaderImg }/>
    
    {/* <Navbar className="nav"/> */}
    
   <div>
    <h1 className="text">Bilgi Teknolojilerinde
        23 Yıllık Tecrübe</h1>

    <p className="text">
    Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
  </div>
    <img alt="MailInput" src={InputImg} className="mail-input" />
    </div> 
    </>
  );
}
export default Header;


