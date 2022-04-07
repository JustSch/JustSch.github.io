import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import './home.css'
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
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="/img/social.png"
                        alt="Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Home;