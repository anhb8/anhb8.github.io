import React from "react";
import './projects.css';
import { Nav, Tab, TabContainer, Row, Col, Container  } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.jpg";
import projImg4 from "../../assets/img/project-img4.png";
import TrackVisibility from "react-on-screen";
import 'animate.css';

const Projects = () => {
    const projects = [
        {
            title: "ZenPomo",
            description:"A Chrome extension that combines the Pomodoro Technique with a pet companion and website blocking features for enhanced productivity and focus.",
            imgUrl: projImg4,
            demoUrl:"", 
            sourceCodeUrl:"https://github.com/anhb8/Chrome-extension-project",
            languages: ["React", "JavaScript", "HTML", "CSS"]
        },
        {
            title: "Tic-Tac-Toe",
            description:"A simple implementation of the Tic-Tac-Toe game using Pygame. The game allows two players to take turns marking cells on a 3x3 grid, aiming to get three of their symbols in a row",
            imgUrl: projImg1,
            demoUrl:"", 
            sourceCodeUrl:"https://github.com/anhb8/CS50-Project0-TicTacToe",
            languages: ["Python"]
        },
        {
            title: "Event Registration Platform",
            description:"Provides a user-friendly interface to create, manage events, monitor real-time registrations, track attendance metrics, and generate insightful reports",
            imgUrl: projImg2,
            demoUrl:"", 
            sourceCodeUrl:"https://github.com/bwpd58/cs5500-project",
            languages:["Python Flask", "JavaScript", "HTML", "CSS"]
        },
        {
            title: "Process Scheduler Simulation",
            description:"An operating system process scheduler simulation with time-based scheduling, synchronization, and dynamic process categorization",
            imgUrl: projImg3,
            demoUrl:"", 
            sourceCodeUrl:"https://github.com/anhb8/CS4760-Project4",
            languages: ["C"]
        },
        // {
        //     title: "Tic-Tac-Toe",
        //     description:"",
        //     imgUrl: projImg1,
        //     demoUrl:"", 
        //     sourceCodeUrl:""
        // },
        // {
        //     title: "Tic-Tac-Toe",
        //     description:"",
        //     imgUrl: projImg1,
        //     demoUrl:"", 
        //     sourceCodeUrl:""
        // },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility> 
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <p>Browse My Recent</p>
                        <h2>Projects</h2>
                        
                        </div>}
                    </TrackVisibility>
                        {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container> */}
                        <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}

export default Projects;