import React from 'react'
import image from '../../assets/img/hakkimizdafoto.png';
import { Row, Col, Container, Image } from 'react-bootstrap';

const Opsiyon = () => {
  return (
    <Container className='py-4'>
    <Row className='py-4'>
      <Col sm={12}>
      
      <h1>Opsiyon hakkında...</h1>

     
      </Col>
      <Col>
      <p>Hira Danışmanlık Eğitim Yazılım Firmasıyla faaliyetlerine başlayan Ocakcı Holding 12 şirketi ve 80 i aşkın personeliyle ve yenilikçi yaklaşımıyla teknolojiyi odağına alarak güvenilir imajı, lider konumu,fark yaratan çalışmaları, güçlü finansman yapısıyla elde ettiği tecrübeyi sürdürmeye devam edecektir. Gelişmelere açık, şirketimizin hedefleri doğrultusunda dinamik, güven duyulan iş ortamı, değer yaratan ve değişen şartlara hızla adaptasyon sağlayan bir yönetim anlayışını benimser. Ocakcı Holding dünden bugüne en önemli değerimiz "İNSAN VE GÜVEN" felsefesini benimser.Paylaşıma ve yeni fikirlere açık değerlerinin temelinde bu vizyonu izler. Tüm çalışanlarıyla yeni bir dünya kurmak için sürdürülebilir büyümeye yönelik adımlar atarak devam etmektedir.</p>

      </Col>
      <Col>
      <iframe width="auto" height="100%"
src="https://www.youtube.com/embed/QPOLrbKI5oQ"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture;
web-share"
allowfullscreen></iframe>
      </Col>
    </Row>
  </Container>
  )
}

export default Opsiyon