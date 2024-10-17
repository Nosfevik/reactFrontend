import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Nav, Container} from "react-bootstrap"
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
  
        <Outlet />
      </div>
    );
  }
  
const NavBarApp = () => {
    return(
        <>
        <Navbar className="navBg" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="home">Home</Nav.Link>
                    {/* <Nav.Link as={Link} to="home">Home</Nav.Link> */}
                    <Nav.Link as={Link} to="regions">Regiones</Nav.Link>
                    <Nav.Link as={Link} to="provincias">Provincias</Nav.Link>
                    <Nav.Link as={Link} to="ciudades">Ciudades</Nav.Link>
                    <Nav.Link as={Link} to="calles">Calles</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
        <section>
            <Outlet></Outlet>
        </section>
        </>
    );
}

export default NavBarApp