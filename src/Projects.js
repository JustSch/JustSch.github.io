import Project from "./projects.json"
import Card from 'react-bootstrap/Card'
import { Container } from "react-bootstrap";
const Projects = () => {
    return (
        <div>
            <Container>
            {RenderProjects}
            </Container>           
        </div>
    );
}

const RenderProjects = Project.projects.map(projectItem =>
    <div key={projectItem.name} className="d-flex justify-content-center">        
        <Card >
            <Card.Body>
                <Card.Title><a href={projectItem.link}>{projectItem.name}</a></Card.Title>
                <Card.Text>
                {projectItem.description}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default Projects;

