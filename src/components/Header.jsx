import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logos from '../assets/logos.png';
import '../style/Header.css'; 
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <div id="header" className='d-flex flex-row mb-2'>
        <img className='p-2' id="header-img" src={logos}/>
          <Navbar.Brand  className='p-2' id='titulo' href="#home">La Mia Vida</Navbar.Brand>
        </div>
          <Nav  className="d-flex flex-row-reverse">
            <Nav.Link href="#home">Reservas</Nav.Link>
            <Nav.Link href="#features">Menú</Nav.Link>
            <Nav.Link href="#pricing">¿Quíenes Somos?</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header