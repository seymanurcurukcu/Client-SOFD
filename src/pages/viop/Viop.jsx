import React from 'react'
import image from '../../assets/img/hakkimizdafoto.png';
import { Row, Col, Container, Image } from 'react-bootstrap';
const Viop = () => {
  return (
    <Container className='py-4'>
    <Row className='py-4'>
      <Col sm={12}>
      
      <h1>Viop hakkında...</h1>

     
      </Col>
      <Col>
        <p>
        VİOP işlemleri, Borsa İstanbul üzerinden gerçekleştirilir. İşlem yapabilmek için öncelikle bir aracı kurumla anlaşma yapmanız gerekmektedir. Aracı kurumlar, yatırımcılara VİOP'ta işlem yapma imkanı sağlarlar. Ayrıca, VİOP'ta işlem yapmadan önce piyasa ve enstrümanlar hakkında iyi bir eğitim almanız ve piyasa analizi yapmanız önemlidir. <br /><br />

VİOP, yatırımcılar için farklı stratejilerin uygulanabileceği bir piyasa olmakla birlikte riskli olabilir. Piyasa dalgalanmaları, fiyat değişimleri ve kaldıraç kullanımı gibi riskler göz önünde bulundurulmalıdır. Bu nedenle, VİOP'ta işlem yapmaya karar vermeden önce iyi bir araştırma yapmanız, risk toleransınızı değerlendirmeniz ve gerektiğinde finansal danışmanlık almanız önemlidir.
        </p>
        <ul>
          <li><b>Risk yönetimi: </b><p>Vadeli işlem sözleşmeleri, yatırımcılara gelecekteki fiyat hareketlerine karşı korunma imkanı sağlar. Yatırımcılar, risklerini yönetebilmek için vadeli sözleşmeler aracılığıyla pozisyon alabilirler.</p></li>
          <li><b>Kaldıraç:</b><p> VİOP'ta kaldıraç kullanarak daha küçük bir teminatla daha büyük bir pozisyon alabilirsiniz. Kaldıraç, potansiyel karı artırırken aynı zamanda potansiyel riskleri de artırır. Bu nedenle, kaldıraçlı işlemleri dikkatli bir şekilde kullanmak önemlidir.</p></li>
          <li><b>Çeşitlendirme:</b><p> VİOP, farklı finansal araçların alınıp satılabileceği bir platform sunar. Yatırımcılar, farklı piyasalarda çeşitlendirilmiş portföyler oluşturabilirler.</p></li>
          <li><b>Spekülasyon:</b><p> VİOP, fiyat hareketlerinden faydalanma amacıyla yatırımcılara spekülasyon yapma imkanı sunar. Yatırımcılar, fiyat beklentilerine göre pozisyon alarak kar elde etmeyi hedefleyebilirler.</p></li>
        </ul>
      </Col>
      <Col className="row align-items-end">
      <iframe width="" height="100%"
            src="https://www.youtube.com/embed/61ufIV7e5kA"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
      </Col>
    </Row>
  </Container>
  )
}

export default Viop