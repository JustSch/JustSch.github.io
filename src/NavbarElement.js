import { Container, Nav, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Link from 'next/link'

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
                        <Link href="/projects" passHref>
                            <Nav.Link>
                                Projects
                            </Nav.Link>
                        </Link>
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
                <Link href="/about" passHref>
                    <Button>
                        About Me
                    </Button>
                </Link>

            </Container>
        </Navbar>
    );
}

export default NavbarElement;