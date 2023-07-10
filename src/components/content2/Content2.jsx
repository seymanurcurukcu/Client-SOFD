import React from 'react'
import { Container, Row,Col,Card } from 'react-bootstrap';
import './content2.css'
import gif1 from '../../../public/customer-service-chat.gif';
import gif2 from '../../../public/file-searching.gif';
import gif3 from '../../../public/dollar-donation.gif';


const navigation = [
  {
    gorsel:gif1,
    title: "FOREX",
    description: "FOREX This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    gorsel:gif2,
    title: "OPSİYON",
    description: "OPSİYON This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    gorsel:gif3,
    title: "VİOP",
    description: "VİOP This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  }
];


const Content2 = (props) => {
  
  return (
    <Container className='bg-orange my-4 py-4' fluid>
      <Container>
      <Row xs={1} md={2} lg={4} className="g-4">
        
      {navigation.map((navi, index) => (
        <Col xs={12} md={4} lg={4} key={index}>
          <Card className='text-center'>
            <Card.Body>
              <Card.Title>
                <img src={navi.gorsel} alt="" width={64}/> {navi.title}</Card.Title>
              <Card.Text>
                {navi.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>  
      ))}
      
    </Row>
      </Container>

    </Container>
  )
}

export default Content2