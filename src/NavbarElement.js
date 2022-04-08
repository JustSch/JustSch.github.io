import { Container, Nav, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
const NavbarElement = () => {
    return ( 
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    Justin Schreiber
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/#/projects">
                        Projects
                    </Nav.Link>
                    <Nav.Link href="https://github.com/JustSch">
                        Github
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/justin-schreiber/">
                        LinkedIn
                    </Nav.Link>
                </Nav>
                <Button href="mailto:jschreiber234@gmail.com">
                    Contact Me
                </Button>
            </Container>
        </Navbar>
     );
}
 
export default NavbarElement;