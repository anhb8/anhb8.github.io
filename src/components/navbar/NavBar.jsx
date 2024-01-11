import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import './navbar.css';
import logo from '../../assets/img/logo.svg';
import logo2 from '../../assets/img/logo2.svg';
import logo3 from '../../assets/img/logo3.svg';
import logo4 from '../../assets/img/logo4.svg';
import logo5 from '../../assets/img/logo5.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, seScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const logos = [logo, logo2, logo3, logo4, logo5];

    document.addEventListener("DOMContentLoaded", function () {
        let currentLogo = 0;
    
        function rotateLogo() {
            // Hide the current logo
            const currentElement = document.getElementById("logo-container");
            if (currentElement) {
                currentElement.innerHTML = ''; // Clear the container
    
                // Create and add the next logo
                const nextLogo = new Image();
                nextLogo.src = logos[currentLogo];
                nextLogo.className = "logo";
                currentElement.appendChild(nextLogo);
    
                // Increment to the next logo (or cycle back to 1)
                currentLogo = (currentLogo + 1) % logos.length;
            }
        }
    
        // Start the rotation
        setInterval(rotateLogo, 3000); // Rotate every 3 seconds (3000 milliseconds)
    });

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
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                <div id="logo-container">
                    <img src={logo} alt="Logo" class="logo"/>
                    <img src={logo2} alt="Logo" class="logo hidden"/>
                    <img src={logo3} alt="Logo" class="logo hidden"/>
                    <img src={logo4} alt="Logo" class="logo hidden"/>
                    <img src={logo5} alt="Logo" class="logo hidden"/>
                </div> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/alina-nguyen-ngoc" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="https://github.com/anhb8" target="_blank"><img src={navIcon2} alt="GitHub" /></a>
                        {/* <a href="#"><img src={navIcon3} alt="" /></a> */}
                    </div>
                    <button className="vvd" onClick={scrollToConnect}><span>Let's connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;