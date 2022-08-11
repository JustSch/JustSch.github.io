import Container from 'react-bootstrap/Container'
const About = () => {
    return (
        <div>
            <Container>
                <Container className='row pt-3 w-75 mx-auto'>
                    <img
                        className='col'
                        src="/img/profile.jpeg"
                        alt="profile"
                    />
                    <div className='col'>
                        <h3 className='text-center'>
                            Justin Schreiber
                        </h3>
                        <p className='pt-2 text-center'>Recent Graduate of Computer Science at Queens College. Proficient in Javascript, Java, NodeJs, React and more.</p>
                    </div>
                </Container>
            </Container>
        </div>
    );
}

export default About;