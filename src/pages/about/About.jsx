import React from 'react'
import image from '../../assets/img/hakkimizdafoto.png';
import './About.css';
const About = () => {
  return (
    <div className='section_about'>
      <div className='container_about'>
        <div className='content-section_about'>
          <div className='title_about'>
              <h1>Hakkımızda</h1>
          </div>
          <div className="content_about">
            <p>Hira Danışmanlık Eğitim Yazılım Firmasıyla faaliyetlerine başlayan Ocakcı Holding 12 şirketi ve 80 i aşkın personeliyle ve yenilikçi yaklaşımıyla teknolojiyi odağına alarak güvenilir imajı, lider konumu,fark yaratan çalışmaları, güçlü finansman yapısıyla elde ettiği tecrübeyi sürdürmeye devam edecektir. Gelişmelere açık, şirketimizin hedefleri doğrultusunda dinamik, güven duyulan iş ortamı, değer yaratan ve değişen şartlara hızla adaptasyon sağlayan bir yönetim anlayışını benimser. Ocakcı Holding dünden bugüne en önemli değerimiz "İNSAN VE GÜVEN" felsefesini benimser.Paylaşıma ve yeni fikirlere açık değerlerinin temelinde bu vizyonu izler. Tüm çalışanlarıyla yeni bir dünya kurmak için sürdürülebilir büyümeye yönelik adımlar atarak devam etmektedir.</p>
          </div>
        </div>
        <div className="image-section_about">
            <img src={image}/>
        </div>
      </div>
    </div>
  )
}

export default About