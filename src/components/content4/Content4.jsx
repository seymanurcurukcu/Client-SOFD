import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import pic1 from '../../../public/izmir-token-yenigun.jpg'
import pic2 from '../../../public/FinansalPlanlamaOdakli_5983fe.jpg'

const Content4 = () => {
    return (
        <Container className='d-flex justify-content-center '>
            <Row className='justify-content-center py-4'>
                <Col>
                    <Card className="text-center"  style={{ width: '18rem' }}>                        
                        <Card.Body>
                                                        
                            <Card.Img src={pic1}></Card.Img>
                            <Card.Text className='my-4'>
                            Ocakcı Holding İstişare Toplantısı
                            </Card.Text>
                            <Button variant="secondary" href='https://www.dha.com.tr/ekonomi/ocakci-holding-kuruluyor-2212768'>Detaylı Bilgi</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">28 Şubat 2023</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center"  style={{ width: '18rem' }}>                        
                        <Card.Body>
                                                        
                            <Card.Img src={pic1}></Card.Img>
                            <Card.Text className='my-4'>
                            Ocakcı Holding İstişare Toplantısı
                            </Card.Text>
                            <Button variant="secondary" href='https://www.dha.com.tr/ekonomi/ocakci-holding-kuruluyor-2212768'>Detaylı Bilgi</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">28 Şubat 2023</Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center"  style={{ width: '18rem' }}>                        
                        <Card.Body>
                                                        
                            <Card.Img src={pic1}></Card.Img>
                            <Card.Text className='my-4'>
                            Ocakcı Holding İstişare Toplantısı
                            </Card.Text>
                            <Button variant="secondary" href='https://www.dha.com.tr/ekonomi/ocakci-holding-kuruluyor-2212768'>Detaylı Bilgi</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">28 Şubat 2023</Card.Footer>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Content4