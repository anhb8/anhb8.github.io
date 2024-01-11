import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import './skills.css'
import { Row, Col } from "react-bootstrap";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const skills = [
        { name: 'Python', percentage: 90, className: 'python' },
        { name: 'JavaScript', percentage: 80, className: 'javascript' },
        { name: 'C/C++', percentage: 80, className: 'c' },
        { name: 'Java', percentage: 80, className: 'java' },
        { name: 'React', percentage: 80, className: 'react' },
        { name: 'HTML/CSS', percentage: 80, className: 'css' },
        { name: 'Data Structures', percentage: 80, className: 'ds' },
        { name: 'Flask', percentage: 80, className: 'flask' },

      ];
      
      const [ref, inView] = useInView({
        threshold: 0.5,
      });

    return (
        <section className="skill" id="skills">
            <div className="container">
                <Row>
                  <Col>
                    <TrackVisibility> 
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <div className="skill-header">
                            <h2>Skills</h2> 
                            <p>Technical Skills</p>
                          </div>
                        </div>}
                    </TrackVisibility>
                    <div className="skill-main">
                      {skills.map((skill, index) => (
                        <div ref={ref} className={`skill-bar ${inView ? 'animated' : ''}`} key={index}>
                          <div className="info">
                            <p>{skill.name}</p>
                            {/* <p>{`${skill.percentage}%`}</p> */}
                          </div>
                          <div className="bar">
                            <span className={skill.className}></span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <img className="background-image-left" src={colorSharp}/>
                    
                  </Col>
                </Row>
          </div>
        </section>
    );
    
}

export default Skills;