import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import './home.css'
import Button from "react-bootstrap/Button";
import 'animate.css/animate.css';
const Home = () => {
    return (
        <Container fluid>
            <Container fluid className="p-5">
                <h1 className="animate__animated animate__lightSpeedInLeft text-center display-3 p-5">
                    Justin Schreiber
                </h1>
                <p className="animate__animated animate__rubberBand text-center display-1 p-5"><strong>He's. So. Pro.</strong></p>
            </Container>
            <Container fluid>
            <Carousel variant="dark">
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="/img/qcprofstat.png"
                        alt="QC Prof Stat Screenshot"
                    />
                    <Carousel.Caption>
                        <h3 className="qc">QC Prof Stat</h3>
                        <p className="qc">Allows Students To See a Grading Distribution</p>
                        <Button variant="secondary" className="float-end" href="https://qc-prof-stat.web.app">See It Here</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="/img/social.png"
                        alt="Two"
                    />
                    <Carousel.Caption>
                        <h3>Social Media Clone</h3>
                        <p>Clone Of A Social Media Website</p>
                        <Button variant="secondary" className="float-end" href="https://github.com/JustSch/SocialMediaClone">See It Here</Button>
                    </Carousel.Caption>                    
                </Carousel.Item>
            </Carousel>
        </Container>
        </Container>
        
    );
}

export default Home;