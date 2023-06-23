import React from 'react';
import './ProgramStyles.css';
import {ProgramCard} from './ProgramCard';
import illustration1 from "../assets/Illustration.png"
import illustration2 from "../assets/Illustration2.png"
export const Programs = () => {
  return (
    <>
    <div>
      <ProgramCard 
      className="program-container" heading="Kalite ve Süreç Yönetimi"
       content="Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız."
       buttonText="Keşfet"
        imageSrc={illustration1} imageAlt="Card Image"/>
        
    </div>
    <div>
      <ProgramCard 
      className="program-container-reverse" imageSrc={illustration2} imageAlt="Card Image" heading="Test Yönetimi ve Analizi"
       content="Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır."
       buttonText="Keşfet"
        />
        
    </div>
    </>
  );
}

export default Programs;