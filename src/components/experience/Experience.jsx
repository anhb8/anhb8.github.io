import React from "react";
import './experience.css';
import education from '../../assets/img/education.svg';
import work from '../../assets/img/work.svg';
import calendar from '../../assets/img/calendar.svg';
import { Nav, Tab, TabContainer, Row, Col, Container  } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import colorSharp2 from "../../assets/img/color-sharp2.png";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility> 
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Experience</h2>
                        <p>My personal journey</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="experience-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> <img src={work} alt="Work Logo" className="work-logo"/>Work </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"> <img src={education} alt="Education Logo" className="education-logo"/>Education</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="sections content content-active">
                                    <div className="data">
                                        <div>
                                            <h3 className="title">Graduate Teaching Assistant</h3>
                                            <span className="subtitle">University of Missouri - St. Louis</span>
                                            <div className="calendar">
                                                <img src={calendar} alt="Calendar Logo" className="calendar-logo"/>
                                                August 2023 - Present
                                            </div>
                                        </div>
                                        <div>
                                            <span className="rounder"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div> 
                                
                               
                                    <div className="data">
                                        <div></div>
                                        <div>
                                            <span className="rounder"></span>
                                            <span className="line"></span>
                                        </div>
                                        <div>
                                            <h3 class="title">Graduate Research Assistant</h3>
                                            <span class="subtitle">University of Missouri - St. Louis</span>
                                            <div className="calendar">
                                                <img src={calendar} alt="Calendar Logo" className="calendar-logo"/>
                                                February 2023 - June 2023
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="data">
                                        <div>
                                            <h3 className="title">Active Learning Assistant</h3>
                                            <span className="subtitle">UMSL Center for Teaching and Learning</span>
                                            <div className="calendar">
                                                <img src={calendar} alt="Calendar Logo" className="calendar-logo"/>
                                                August 2022- September 2022
                                            </div>
                                        </div>
                                        <div>
                                            <span className="rounder"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                
                                    <div className="data">
                                        <div></div>
                                        <div>
                                            <span className="rounder"></span>
                                            <span className="line"></span>
                                        </div>
                                        <div>
                                            <h3 className="title">Software Specialist Intern</h3>
                                            <span className="subtitle">Charter Communications</span>
                                            <div className="calendar">
                                                <img src={calendar} alt="Calendar Logo" className="calendar-logo"/>
                                                June 2022 - August 2022
                                            </div>
                                        </div>
                                    </div>

                                    <div className="data">
                                        <div>
                                            <h3 className="title">Math Tutor</h3>
                                            <span className="subtitle">University Tutoring Center</span>
                                            <div className="calendar">
                                                <img src={calendar} alt="Calendar Logo" className="calendar-logo"/>
                                                August 2021 - December 2021
                                            </div>
                                        </div>
                                        <div>
                                            <span className="rounder"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>

                                    <div className="data">
                                        <div></div>
                                        <div>
                                            <span className="rounder"></span>
                                            <span className="line"></span>
                                        </div>
                                        <div>
                                            <h3 className="title">Student Assistant - Next Step Internship</h3>
                                            <span className="subtitle">UMSL Global</span>
                                            <div className="calendar">
                                                <img src={calendar} alt="Calendar Logo" className="calendar-logo"/>
                                                February 2020 - May 2022
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="second">
                                <div className=" sections content content-active">
                                    <div className="data">
                                        <div>
                                            <h3 className="title">Master of Science in Computer Science</h3>
                                            <span className="subtitle">University of Missouri - St. Louis</span>
                                            <div className="calendar">
                                                <img src={calendar} alt="Calendar Logo" className="calendar-logo"/>
                                                January 2023 - May 2024
                                            </div>
                                        </div>
                                        <div>
                                            <span className="rounder"></span>
                                            <span className="line"></span>
                                        </div>
                                    </div>
                                
                                    <div className="data">
                                        <div></div>
                                        <div>
                                            <span className="rounder"></span>
                                            <span className="line"></span>
                                        </div>
                                        <div>
                                            <h3 className="title">Bachelor of Science in Computer Science</h3>
                                            <span className="subtitle">University of Missouri - St. Louis</span>
                                            <div className="calendar">
                                                <img src={calendar} alt="Calendar Logo" className="calendar-logo"/>
                                                    August 2019 - May 2024
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
        
    )
}



export default Experience;