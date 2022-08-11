import { Container, Nav, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
/****@TODO fix active highlight
 * 
 * 
 * 
 * 
 */





const NavbarElement = () => {
    return ( 
        <Navbar bg="light" variant="light" expand="lg">
            <Container>                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="/">
                    Justin Schreiber
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">                   
                <Nav className="me-auto">
                    <Nav.Link href="/projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link href="https://github.com/JustSch">
                        Github
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/justin-schreiber/">
                        LinkedIn
                    </Nav.Link>
                    <Nav.Link href="/blog">
                        Blog
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Button href="/about">
                    About Me
                </Button>
            </Container>
        </Navbar>
     );
}
 
export default NavbarElement;