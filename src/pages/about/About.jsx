import React from 'react'

const About = () => {
  return (
    <div className='section'>
      <div className='container'>
        <div className='content-section'>
          <div className='title'>
              <h1>Hakkımızda</h1>
          </div>
          <div className="content">
            <p>Hira Danışmanlık Eğitim Yazılım Firmasıyla faaliyetlerine başlayan Ocakcı Holding 12 şirketi ve 80 i aşkın personeliyle ve yenilikçi yaklaşımıyla teknolojiyi odağına alarak güvenilir imajı, lider konumu,fark yaratan çalışmaları, güçlü finansman yapısıyla elde ettiği tecrübeyi sürdürmeye devam edecektir. Gelişmelere açık, şirketimizin hedefleri doğrultusunda dinamik, güven duyulan iş ortamı, değer yaratan ve değişen şartlara hızla adaptasyon sağlayan bir yönetim anlayışını benimser. Ocakcı Holding dünden bugüne en önemli değerimiz "İNSAN VE GÜVEN" felsefesini benimser.Paylaşıma ve yeni fikirlere açık değerlerinin temelinde bu vizyonu izler. Tüm çalışanlarıyla yeni bir dünya kurmak için sürdürülebilir büyümeye yönelik adımlar atarak devam etmektedir.</p>
           
          </div>
          <div className="social">
             <a href=""><i className='fab fa-facebook-f'></i></a>
             <a href=""><i className='fab fa-facebook-f'></i></a>
             <a href=""><i className='fab fa-facebook-f'></i></a>
          </div>
        </div>
        <div className="image-section">
            <img src='../../assets/img/hakkimizdafoto.png'/>
        </div>
      </div>
    </div>
  )
}

export default About