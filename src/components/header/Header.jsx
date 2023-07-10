import Container from 'react-bootstrap/Container';

import SofdLogo from '../../../public/vecteezy_coin-dollar-and-hand_1199503.png'
import './header.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className='h-48'>
        <Container >
          <Navbar className="me-auto">
            <Navbar.Text className='p-10'>Lisanslı ve Geniş Yetkili Aracı Kurum</Navbar.Text>
            <span>-</span>
            <Navbar.Text className='p-10'>Lisans No: G-039 (398)</Navbar.Text>

          </Navbar>
          <Nav className="ms-auto">
            <Nav.Link href="#">7/24 BİZE ULAŞIN</Nav.Link>
            <div className="vr" />

            <Nav.Link href="#"> 0 554 429 67 79</Nav.Link>
            <div className="vr" />

            <Nav.Link href="#">CANLI DESTEK</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
      <Navbar className='second-nav-shadow second-nav-bg justify-content-center' data-bs-theme="light">
        <Container className='justify-content-space-between p-4'>
          <div>
            <Navbar.Brand href="#home" className='d-flex align-items-center'>
              <img
                alt=""
                src={SofdLogo}
                width="64"
                height="64"
                className="d-inline-block align-top me-4 logo"
              />
              <div>
                <h1>SOFD</h1>
                <p className='m-0'>SEDAT OCAKCI FİNANSAL DANIŞMANLIK</p>

              </div>
            </Navbar.Brand>
          </div>

          <div className='d-flex gap-3' >
            <div className='mr-2'>
              <Button variant="outline-dark" href="/" >
              <i className="bi bi-house-door-fill"></i> Home
              </Button>
            </div>
            <div className='mr-2'>
              <Button variant="outline-dark" href="/about">
              <i className="bi bi-info-circle-fill" ></i> About
              </Button>
            </div>
            <div>
              <Button variant="outline-dark" href="/contact">
              <i className="bi bi-envelope-fill"></i> Contact
              </Button>
            </div>





          </div>



        </Container>
      </Navbar>
      <Container>

      </Container>
      <Nav className="justify-content-center my-4 py-2" activeKey="/home">
        
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
        
        
        
      </Nav>
     
    
    </>

  )
}

export default Header


