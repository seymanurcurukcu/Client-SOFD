import React from 'react';
import './content3.css';
import { Container, Row,Col, Image } from 'react-bootstrap';
import gif from '../../../public/dollar-donation.gif'

const Content3 = () => {
  return (
    <Container className='bg-gray my-4 py-4' fluid>
      <Container>
      <Row className='align-items-center ' >
        <Col lg={8} sm={12} className='d-flex align-items-center justify-content-center'>
            <h3>SEDAT OCAKCI FİNANSAL DANIŞMANLIK A.Ş.</h3>
        </Col>
        <Col lg={4} sm={12} className='d-flex align-items-center justify-content-center'>
            <Image src={gif} width={76}></Image>
        </Col>
        
      
      
    </Row>
      </Container>

    </Container>
  )
}

export default Content3