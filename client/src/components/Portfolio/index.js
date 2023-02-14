import React from "react"
import marvelPic from "../../assets/images/marvelite.png"
import powerPic from "../../assets/images/powertrip.png"
import ProjectCard from "../ProjectCard"
import "./style.css"

const Portfolio = () => {
    const Projects = [
        {
            id: 1,
            title: "Project 1",
            image: marvelPic,
            githubLink: "",
            websiteLink: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            technology: [],

        },
        {
            id: 2,
            title: "Project 2",
            image: powerPic,
            githubLink: "",
            websiteLink: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            technology: [],
            
        },
        {
            id: 3,
            title: "Project 1",
            image: marvelPic,
            githubLink: "",
            websiteLink: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            technology: [],
            
        },
        {
            id: 4,
            title: "Project 1",
            image: marvelPic,
            githubLink: "",
            websiteLink: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            technology: [],
            
        },
        {
            id: 5,
            title: "Project 1",
            image: marvelPic,
            githubLink: "",
            websiteLink: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            technology: [],
            
        },
        {
            id: 6,
            title: "Project 1",
            image: marvelPic,
            githubLink: "",
            websiteLink: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            technology: [],
            
        },
      

    ]
    return(
        <section>
            <h1>
                Portfolio
            </h1>
            <div id="cardHolder">

            
            {Projects.map(project => {
             return <ProjectCard text={project.description} title={project.title} image={project.image} key={project.id} />
            
            })}
            </div>
        </section>

    )
}
export default Portfolio