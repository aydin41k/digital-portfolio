import Project from "./Project";

function Projects({data, bgcolor}) {
    const projects = data.map((project, index) => {
        return <Project key={index} details={project}/>;
    });

    return (
        <div id="projects" className="container">
            <h2>Projects</h2>
            <hr/>
            <div className="row">
                {projects}
            </div>
        </div>
    );
}

export default Projects;