import Project from "./projects.json"
const Projects = () => {
    return ( 
        <div>
            <p className="text-center">PLACEHOLDER TEXT</p>
        </div>
     );
}

function RenderProjects(){
    return ( 
        <div>
            <p className="text-center">{Project.projects[0]["name"]}</p>
        </div>
     );
}
 
export default Projects;