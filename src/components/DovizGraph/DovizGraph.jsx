import React from 'react'

const DovizGraph = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">USD/TRY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">EUR/TRY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">CAD/TRY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">RUB/TRY</Nav.Link>
                </Nav.Item>
                
            </Nav>
  )
}

export default DovizGraph