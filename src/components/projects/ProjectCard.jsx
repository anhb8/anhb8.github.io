import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, demoUrl, sourceCodeUrl, languages }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img class="proj-image" src={imgUrl} />
                <div className="language-indicator">
                    {languages &&
                        languages.map((language, index) => (
                            <span key={index} className="badge badge-info">{language}</span>
                        ))}
                </div>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="buttons-container">
                        <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary ">Source Code</a>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;