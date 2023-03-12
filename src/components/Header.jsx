import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logos from '../assets/logos.png';
import '../style/Header.css';
function Header() {
  return (
    <>
      <div>
        <div className="d-flex flex-column mb-2">
          <div className='p-2 d-sm-inline-flex justify-content-center mb-2'>
            <div className='p-2'>
              <img id="header-img" src={logos} />
            </div>
            <div className='vl'></div>
            <div className='p-2 m-3'>
              <Navbar.Brand id='titulo' href="#home">La Mia Vida</Navbar.Brand>
            </div>
          </div>
            <Navbar bg="dark" variant="dark" className='p-2'>
              <Container>
                <Nav className="justify-content-md-center">
                  <Nav.Link href="/body">Reservas</Nav.Link>
                  <Nav.Link href="#features">Menú</Nav.Link>
                  <Nav.Link href="#pricing">¿Quíenes Somos?</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
        </div>
    </>
  );
}

export default Header