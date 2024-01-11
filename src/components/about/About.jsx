import React from "react";
import './about.css'
import 'animate.css';
import ME from '../../assets/img/alina-photo.jpeg';
import TrackVisibility from "react-on-screen";

const About = () => {
    return (
        <section className="about" id="about">
            <TrackVisibility> 
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <h2>About Me</h2>
                        </div>}
                    </TrackVisibility>
                
                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="About image" />
                        </div>
                    </div>

                    <div className="about__content">
                        <p>
                            My name is Alina Nguyen. I am pursuing my Masters in Computer Science specializing in Artificial Intelligence at the University of Missouri - St. Louis. My journey involves tackling challenges, continuous learning, and crafting practical solutions. Expected to graduate in May 2024, I bring a fresh perspective and a passion for applied computer science. I'm eager to collaborate on impactful projects and contribute my skills to drive success.
                        </p>
                        <span className="tagline">
                            <a href="https://drive.google.com/file/d/11Wo2lWmwmEb9Lu9XoENsM9akJzswo2R5/view?usp=sharing" target="_blank" className='resume-btn'> Resume</a>
                        </span>

                    </div>
                </div>
            
        </section>    
    )
}

export default About