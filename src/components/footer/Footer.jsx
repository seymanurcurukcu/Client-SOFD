import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import './footer.css'


const Footer = () => {
  return (
    
    <footer className='text-center text-lg-start text-muted bg-dark text-white pt-4'>
   

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4 text-start'>
                Sedat Ocakcı Danışmanlık Şirketi
              </h6>
              <p>
              Başarılı girişimler, cesur adımlarla toplumumuza ve ortak geleceğimize değer katmak, markalarımızla daima yeniliklere öncülük etmektedir.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4 text-start'>Ürünlerimiz</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Hira Yazılım
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Metayıldız B.T.
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Dolgaç Hukuk
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Koçer Motors
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4 text-start'>Önemli Bağlantılar</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Haberler
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Analiz
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Döviz Kuru
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Viop
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Forex
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Borsa
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className=' fw-bold mb-4 text-start'>İletişim</h6>
              <p>
                
              AOSB Mah. 10049 Sk. No:6 <br />Çiğli/İzmir
              </p>
              <p>
                
                info@ocakciholding.com
              </p>
              <p>
              +90 554 429 67 79
              </p>
             
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <div>
          <a href='' className='me-4 text-reset'>
          <i className="bi bi-facebook"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i className="bi bi-twitter"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i className="bi bi-google"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i className="bi bi-instagram"></i>
          </a>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer