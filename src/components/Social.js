import React from 'react';
import "./FooterStyles.css";
import bg from "../assets/Background.png"
import linkedin from "../assets/LinkedinLogo.png"
import twitter from "../assets/TwitterLogo.png"
import insta from "../assets/InstagramLogo.png"
import fbook from "../assets/FacebookLogo.png"
export  const Social=() => {
  return (
    <>
    <footer>
        <img src={bg} alt='background '  className=''/>
    <div className='container'>
    <div>
    <h3>Çözüm ve Hizmetler</h3>
    <p>Yazılım Geliştirme</p>
    <p>Outsourcing</p>
    <p>Kalite ve Süreç Yönetimi</p>
    <p>Danışmanlık</p>
    <p>IoT Destekli Çözümler</p>
    </div>

    <div >
    <h3>Ürünler</h3>
    <p>Eğitim Yönetim Sistemi</p>
    <p>İnsan Sermayesi Yönetim Sistemi</p>
    <p>Müşteri İlişkileri Yönetim Sistemi</p>
    <p>İçerik Yönetim Sistemi</p>
    
    </div>

    <div>
    <h3>Kurumsal</h3>
    <p>Hakkımızda</p>
    <p>Belge ve Yetkinlikler</p>
    <p>İş Ortakları</p>

    </div>

    <div>
    <h3>İletişim</h3>
    <p>Bilgi İstek Formu</p>
    <p>Uzman Talep Formu</p>
    
    </div>

    </div>
    <div className='copyrights'> 
        <p>© Copyright 2010-2021 - Can Çevik</p>
        <div className='socials'>
        <img src={linkedin} alt='linkedin' className='logoimg'/>
        <img src={twitter} alt='twitter' className='logoimg'/>
        <img src={insta} alt='instagram' className='logoimg'/>
        <img src={fbook} alt='facebook' className='logoimg'/>
        </div>
    </div>
    </footer>
  </>
  );
}

export default Social;