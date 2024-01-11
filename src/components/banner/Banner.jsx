import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './banner.css';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Driven by the vision of making a difference through software that redefines possibilities"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 100;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick()
        },delta);

        return () => { clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);

        }
    }
    
    const scrollToConnect = () => {
        const connectElement = document.getElementById('connect');

        if (connectElement) {
            window.scrollTo({
                top: connectElement.offsetTop,
                behavior: 'smooth',
            });
        }
    }

    return (
        <section className="banner" id="home"> 
            <Container>
                <Row className="justify-content-center d-flex">
                    <Col xs={12} md={6} xl={7}>
                    <div className="centered-container">
                        <TrackVisibility> 
                        {({ isVisible }) => 
                        
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{"Alina Nguyen "}</h1>
                                <p><span className="wrap">{text}</span></p>
                                <button onClick={scrollToConnect}>Let's connect <ArrowRightCircle size={25}/></button>
                           
                        </div>}
                        </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;