import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import './home.css'
import Button from "react-bootstrap/Button";
const Home = () => {
    return (
        <Container fluid>
            <h4>React-Bootstrap Carousel Component</h4>
            <Carousel variant="dark">
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="/img/qcprofstat.png"
                        alt="QC Prof Stat Screenshot"
                    />
                    <Carousel.Caption>
                        <h3 class="qc">QC Prof Stat</h3>
                        <p class="qc">Allows Students To See Grading Distribution</p>
                        <Button variant="secondary" className="float-end" href="https://qc-prof-stat.herokuapp.com">Check Out Here</Button>
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
                        <Button variant="secondary" className="float-end" href="https://github.com/JustSch/SocialMediaClone">Check Out Here</Button>
                    </Carousel.Caption>                    
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Home;