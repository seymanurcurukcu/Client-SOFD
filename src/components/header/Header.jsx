import Container from 'react-bootstrap/Container';


import SofdLogo from '../../../public/logo1.png'
import './header.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
      <Navbar className='justify-content-center' data-bs-theme="light">
        <Container className='justify-content-space-between p-3 horizontal-border'>
          <div>
            <Navbar.Brand href="#home" className='d-flex align-items-center'>
              <img
                alt=""
                src={SofdLogo}
                width="48"
                height="48"
                className="d-inline-block align-top me-2 logo"
              />
              <div>
              <h6 className='m-0'>SEDAT OCAKCI <br /> DANIŞMANLIK HİZMETLERİ</h6>
             </div>
            </Navbar.Brand>
          </div>

          <div className='d-flex gap-3' >
            
            <Nav className="ms-auto">
            <Nav.Link href="#">7/24 BİZE ULAŞIN</Nav.Link>
            <div className="vr" />

            <Nav.Link href="#"> 0 554 429 67 79</Nav.Link>
            <div className="vr" />

            <Nav.Link href="#">CANLI DESTEK</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
      <Container>
        <Nav expand="lg" className="justify-content-center py-2" activeKey="/home">
        <Nav.Item>
            <Nav.Link href="/"><span className='text-type'>
            <i className="bi bi-house-door-fill"></i></span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home"><span className='text-type'>FOREX</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"><span className='text-type'>OPSİYON</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><span className='text-type'>VİOP</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><span className='text-type'>BORSA</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><span className='text-type'>KRİPTO</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><span className='text-type'>ANALİZ</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><span className='text-type'>KURUMSAL</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><span className='text-type'>İLETİŞİM</span></Nav.Link>
          </Nav.Item>
        </Nav>

      </Container>
    </div>

  )
}

export default Header


