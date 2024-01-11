import React, { useEffect } from "react";
import './App.css';
import logo from './assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Banner from './components/banner/Banner';

const App = () => {
    useEffect(() => {
        fetch("/api")
        .then((res) => res.json)
    }, [])

    return (
        <div className="App">
            <NavBar />
            <Banner />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;