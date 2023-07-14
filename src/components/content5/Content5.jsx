import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import './content5.css'

const Content5 = () => {
    return (
        <Container fluid className='bg-gray py-4'>
            <Container className='py-4 '>

                <Row >
                    <h3 className='text-center'>ARAŞTIRMA & ANALİZ</h3>
                    <p className='text-center'>Yatırım stratejilerinize rehber olabilecek forex, viop, borsa analizleri; araştırma raporları ve uzman görüşleri</p>
                </Row>
                <Row>
                    <Col>
                        <Nav variant="underline" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="disabled" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Content5