import React from 'react';
import './content3.css';
import { Container, Row,Col, Image } from 'react-bootstrap';
import gif from '../../../public/ocakcı holding orijinal.gif'

const Content3 = () => {
  return (
    <Container className='bg-gray my-4 py-4' fluid>
      <Container>
      <Row className='align-items-center ' >
        <Col lg={8} sm={12} className='d-flex flex-column align-items-center justify-content-center'>
            <h3 className='text-align mb-4'>SEDAT OCAKCI FİNANSAL DANIŞMANLIK A.Ş.</h3>
            <p className='me-4'>
            Dünya standartlarındaki teknolojik altyapımızla Türk sermaye piyasalarının önemli yatırım kuruluşları arasında yer alıyoruz. Bugünün yatırım ihtiyaçlarına geleceğin çözümlerini şimdiden sunmayı hedefliyoruz. <br /><br />

Son teknolojileri kullanan gelişmiş online Forex, Opsiyon, VİOP ve Borsa işlem platformlarımız sayesinde müşterilerimiz tüm anlık finansal verilere, piyasa analizlerine ve ihtiyaç duyulan diğer bilgilere hızlı ve güvenli bir şekilde ulaşıp işlem yapabilmekte, yaratıcı mobil iletişim kolaylıklarıyla zaman ve mekan sınırlarından kurtulmaktadır.<br /><br />

Bugün 200 Milyon TL. ödenmiş sermayemiz, performansımız ve dünya standartlarındaki teknolojik altyapımızla Türk sermaye piyasalarının önemli aktörlerinden biriyiz ve geleceği şekillendiren her gelişmenin yakın takipçisiyiz.
            </p>
        </Col>
        <Col lg={4} sm={12} className='d-flex align-items-center justify-content-center'>
            <Image src={gif}  fluid ></Image>
        </Col>     
      </Row>
    </Container>

    </Container>
  )
}

export default Content3