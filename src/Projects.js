import Project from "./projects.json"
import Card from 'react-bootstrap/Card'
import { Container } from "react-bootstrap";
const Projects = () => {
    return (
        <div>
            <Container className="pt-3">
            {RenderProjects}
            </Container>           
        </div>
    );
}

const RenderProjects = Project.projects.map(projectItem =>
    <div key={projectItem.name}>        
        <Card>
        <Card.Header><a href={projectItem.link}><strong>{projectItem.name}</strong></a></Card.Header>
            <Card.Body>               
                <Card.Text>
                {projectItem.description}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default Projects;

