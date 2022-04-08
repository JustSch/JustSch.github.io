import Container from 'react-bootstrap/Container'
const About = () => {
    return (
        <div>
            <Container>
                <h3 className='pt-2'>
                    Justin Schreiber
                </h3>
                <Container className='d-flex justify-content-start pt-3'>
                    <img
                        width="247"
                        height="247"
                        src="/img/profile.jpeg"
                        alt="profile"
                    />
                    <p className='ps-3 pt-5 text-end'>Recent Graduate of Computer Science at Queens College &nbsp; Proficient in Javascript, Java, NodeJs, React and more</p>
                </Container>

            </Container>
        </div>
    );
}

export default About;