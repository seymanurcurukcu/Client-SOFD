import React from 'react'
import image from '../../assets/img/hakkimizdafoto.png';
import { Row, Col, Container, Image } from 'react-bootstrap';
import HisseSenedi from '../../components/graphcontent/hisse-senedi';
const Borsa = () => {
  return (
    <Container className='py-4'>
    <Row className='py-4'>
      <Col sm={12}>
      
      <h1>Borsa hakkında...</h1>

     
      </Col>
      <Col md={12} lg={6}>
      <p>Borsalarda işlem yaparken, piyasa koşullarını takip etmek, doğru zamanlamayı yapmak ve riskleri yönetmek önemlidir. İyi bir piyasa analizi yapmak, şirketlerin temel ve teknik analizini yapmak ve portföyünü çeşitlendirmek, borsada başarılı olmanın önemli unsurlarıdır. <br /><br />

Borsalar, yatırımcılara uzun vadeli yatırım fırsatları, şirketlere sermaye sağlama imkanı ve ekonomik büyümeyi teşvik etme gibi avantajlar sunar. Ancak borsalarda işlem yapmanın riskleri de vardır. Fiyat dalgalanmaları, likidite riski ve diğer faktörler yatırımcıları etkileyebilir. Bu nedenle, borsada işlem yapmaya karar vermeden önce iyi bir araştırma yapmanız, risk toleransınızı değerlendirmeniz ve gerektiğinde finansal danışmanlık almanız önemlidir.</p>
    <ul>
      <li><b>Borsa endeksi:</b> Borsada işlem gören hisse senetlerinin performansını ölçmek için kullanılan bir göstergedir. Örneğin, New York Borsası'nda S&P 500 veya Frankfurt Borsası'nda DAX gibi endeksler bulunur.</li>
      <li><b>Borsa işlem saatleri:</b> Borsalar genellikle belirli saatler arasında açıktır. Bu saatlerde yatırımcılar alım satım işlemlerini gerçekleştirebilirler. Örneğin, New York Borsası genellikle 9:30 ile 16:00 arasında açıktır.</li>
      <li><b>Borsa emirleri:</b> Yatırımcılar, alım veya satım yapmak istedikleri hisse senedi veya diğer menkul kıymetler için emir verebilirler. Emirler, belli bir fiyattan veya piyasa fiyatından gerçekleştirilebilir.</li>
      <li><b>Borsa aracı kurumları:</b> Yatırımcılar genellikle borsada işlem yapmak için aracı kurumlara başvururlar. Aracı kurumlar, yatırımcıların emirlerini piyasaya ileten ve işlemlerin gerçekleşmesini sağlayan aracılardır. </li>
    </ul>
      </Col>
      <Col className="row align-items-end">
      <iframe  width="100%" height="100%" min-height="560"
            src="https://www.youtube.com/embed/YJtwKUAIH6o"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
      </Col>
    </Row>
    <Row>
      <HisseSenedi/>
    </Row>
  </Container>
  )
}

export default Borsa