import react from "react"
import Card from 'react-bootstrap/Card';
import "./style.css"
function ProjectCard({ key, image, title, text }) {

    return (
    <Card key={key} id="project">
        <Card.Img src={image} alt={title}></Card.Img>
        <Card.Body>{text}</Card.Body>
    </Card>
    )
}
export default ProjectCard;