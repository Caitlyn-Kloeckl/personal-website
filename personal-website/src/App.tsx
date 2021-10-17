import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import "animate.css";


function App() {

  return (
    <div className="App">
      <section>
        <Header></Header>
      </section>
      <section id="about" className="about-section">
        <About></About>
      </section>
      <section id="resume" className="resume-section">
        <Resume></Resume>
      </section>
      <section id="skills" className="skills-section">
        <Skills></Skills>
      </section>
      <section id="projects" className="projects-section">
        <Projects></Projects>
      </section>
    </div>
  );
}

export default App;
