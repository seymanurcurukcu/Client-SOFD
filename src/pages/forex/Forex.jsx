import React from 'react'
import image from '../../assets/img/hakkimizdafoto.png';
import { Row, Col, Container, Image } from 'react-bootstrap';
import ChartsButtons from '../../components/graphcontent/ChartsButtons';
import YouTube from 'react-youtube';
import Websocket from '../../components/graphcontent/websocket';
const Forex = () => {

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };


  return (
    <Container className='py-4'>
      <Row className='py-4 mb-4'>
        <Col sm={12}>

          <h1>Forex hakkında...</h1>


        </Col>
        <Col>
          <p>Forex piyasasında işlem yapmak için iyi bir piyasa analizi yapmak önemlidir. Teknik analiz ve temel analiz gibi analiz yöntemleri kullanarak fiyat hareketlerini tahmin etmeye çalışabilirsiniz. Ayrıca, risk yönetimi stratejileri geliştirmek ve duygusal kararlar almaktan kaçınmak da başarılı bir forex yatırımcısı olmanın önemli unsurlarıdır. <br /><br />

            Forex piyasası, yüksek getiri potansiyeli ve likiditesiyle birçok yatırımcı için cazip olabilir, ancak riskleri de göz önünde bulundurmak önemlidir. Yüksek kaldıraç kullanımı ve piyasa dalgalanmaları kaynaklı risklerle karşılaşabilirsiniz. Bu nedenle, forex piyasasına girmeden önce iyi bir eğitim almanız, deneyim kazanmanız ve risk toleransınızı belirlemeniz önemlidir. Ayrıca, lisanslı ve güvenilir bir aracı kurum seçmek de güvenliğiniz açısından önemlidir.</p>
          
          <p>
            <ul>
            <li><b>Yüksek likidite:</b> Forex piyasası, dünyanın en likit piyasasıdır. Bu, herhangi bir para biriminin anında alınıp satılabileceği anlamına gelir.</li>
            <li><b>24 saat açık:</b> Forex piyasası hafta içi 5 gün 24 saat açıktır. Farklı coğrafi bölgelerdeki ticaret oturumlarının çakışması nedeniyle, yatırımcılar günün herhangi bir saatinde işlem yapabilirler.</li>
            <li><b>Kaldıraçlı işlemler:</b> Forex piyasasında kaldıraç kullanarak daha büyük pozisyonlar açabilirsiniz. Kaldıraç, küçük bir teminatla daha büyük bir pozisyon alma imkanı sunar. Ancak kaldıraçlı işlemler yüksek kar potansiyeli taşıdığı kadar yüksek risk de içerir.</li>
            <li><b>Çift yönlü işlem:</b> Forex piyasasında hem fiyatların yükselmesinden hem de düşmesinden kar elde etme imkanı vardır. Bu özellik, yatırımcıların piyasadaki herhangi bir fiyat hareketinden faydalanabilmesini sağlar.</li>
          </ul>
          </p>
          
        </Col>
        <Col md={12} lg={6} >

          <iframe width="100%" height="100%"
            src="https://www.youtube.com/embed/gWOm1TZt05Y"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>


        </Col>
      </Row>
     
      <Row>
        <Websocket/>
      </Row>
      <Row>

      </Row>

    </Container>
  )
}

export default Forex