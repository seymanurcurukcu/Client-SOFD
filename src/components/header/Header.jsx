import Container from 'react-bootstrap/Container';

import SofdLogo from '../../../public/logo2.png'
import './header.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div className='m-xl'>
      <Navbar bg="whte" data-bs-theme="light" className='h-48 '>
        <Container className='horizontal-border' >
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
      
      <Navbar className='justify-content-center' data-bs-theme="light">
        <Container className='justify-content-space-between p-4 horizontal-border'>
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
                <h3 className='m-0'>SOFD</h3>
                <p className='m-0 fs-6'>SEDAT OCAKCI FİNANSAL DANIŞMANLIK</p>

              </div>
            </Navbar.Brand>
          </div>

       {/*    <div className='d-flex gap-3' >
            <div className='mr-2'>
              <Button variant="outline-dark" href="/" >
              <i className="bi bi-house-door-fill me-2"></i>
              <span>Home</span> 
              </Button>
            </div>
            <div className='mr-2'>
              <Button variant="outline-dark" href="/about">
              <i className="bi bi-info-circle-fill me-2" ></i> 
              <span>About</span>
              </Button>
            </div>
            <div>
              <Button variant="outline-dark" href="/contact">
              <i className="bi bi-envelope-fill me-2"></i>
              <span>Contact</span> 
              </Button>
            </div>





          </div> */}



        </Container>
      </Navbar>
      <Container>
      <Nav className="justify-content-start " activeKey="/home">
        
        <Nav.Item>
          <Nav.Link href="/">
          <i className="bi bi-house-door-fill me-1" style={{color:'black'}} size={48}></i><span className='text-type'>ANASAYFA</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/about'><span className='text-type'>HAKKINDA</span></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contact'><span className='text-type'>İLETİŞİM</span></Nav.Link>
        </Nav.Item>  
      </Nav>
     
    </Container>
    </div>

  )
}

export default Header


