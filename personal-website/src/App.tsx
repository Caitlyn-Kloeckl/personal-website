import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import profileImage from './profile-image.jpg';


function App() {
  return (
    <div className="App">
      <Navbar>
        <Container className="navbar">
          <Nav>
            <Nav.Link className="navbar-text" href="#home">Home</Nav.Link>
            <Nav.Link className="navbar-text" href="#about">About</Nav.Link>
            <Nav.Link className="navbar-text" href="#resume">Resume</Nav.Link>
            <Nav.Link className="navbar-text" href="#resume">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <header id="home" className="title-section">
        <h1 className="main-title">
          Caitlyn Kloeckl
      </h1>
        <h4>
          Software Engineer, Physics Major, Photographer, Plant Lover. </h4>
        <hr className="line"></hr>
        <div className="col-lg-8">
          <div style={{ display: "inline-block" , paddingLeft:"20px", paddingTop: "20px", paddingBottom: "20px", paddingRight:"20px"}}>
            <a href="https://www.linkedin.com/in/caitlyn-kloeckl/" target="_blank" className="social-buttons"><i style={{ paddingRight: "20px" }} className="fa fa-linkedin"></i>LinkedIn</a>
          </div>
          <div style={{ display: "inline-block" , paddingLeft:"20px", paddingTop: "20px", paddingBottom: "20px", paddingRight:"20px"}}>
            <a href="https://www.caitlynkloecklphotography.com/" target="_blank" className="social-buttons"><i style={{ paddingRight: "20px" }} className="fa fa-camera"></i>Photography</a>
          </div>
        </div>
      </header>
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div style={{ paddingTop: "30px", paddingBottom: "30px" }} className=" col-lg-4 col-sm-1">
              <img src={profileImage} width="250" height="350" />
            </div>
            <div className="col-lg-8 text-start">
              <div>
                <h2>About Me</h2>
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div>
                <hr></hr>
                <h2>Contact Details</h2>
                <p className="about-text">
                  Caitlyn.Kloeckl@gmail.com <br></br>
                  Based in Minneapolis, MN
                </p>
              </div>
              <div style={{ paddingTop: "20px", paddingBottom: "30px" }}>
                <a style={{ width: "260px" }} className="social-buttons" href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Resume.pdf"><i style={{ paddingRight: "20px" }} className="fa fa-download"></i>Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resume" className="resume-section">
        <div style={{ paddingBottom: "25px" }} className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-1">
              <h2 className="resume-main-titles">Education</h2>
            </div>
            <div className="col-lg-7 text-start">
              <div>
                <h3 className="resume-secondary-titles">University of Minnesota - College of Science and Engineering</h3>
                <p className="resume-tertiary-titles"><i>Bachelor of Science</i> • Expected December 2021</p>
                <p className="resume-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="line-resume"></hr>
        <div style={{ paddingBottom: "25px" }} className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-1">
              <h2 className="resume-main-titles">Work <br></br>Experience</h2>
            </div>
            <div className="col-lg-7 text-start">
              <div>
                <h3 className="resume-secondary-titles">Technology Help Specialist</h3>
                <p className="resume-tertiary-titles"><i>Univerisy of Minnesota IT</i> • October 2019 – June 2021</p>
                <p className="resume-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3 className="resume-secondary-titles">Photographer - Self Employed</h3>
                <p className="resume-tertiary-titles"><i>Univerisy of Minnesota IT</i> • September 2020 – Current</p>
                <p className="resume-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="line-resume"></hr>
        <div className="container">
          <div className="row">
            <div style={{ paddingTop: "25px" }} className="col-lg-4 col-sm-1">
              <h2 className="resume-main-titles">Skills</h2>
            </div>
            <div className="col-lg-8">
              <div>
                <div style={{ paddingLeft: "0px" }} className="container">
                  <div className="skills-bar">
                    <div className="bar">
                      <div className="info">
                        HTML
                      </div>
                      <div className="progress-line"><span className="html"></span></div>
                      <div className="bar">
                        <div className="info">
                          <span>CSS</span>
                        </div>
                        <div className="progress-line"><span className="css"></span></div>
                        <div className="bar">
                          <div className="info">
                            <span>BOOTSTRAP</span>
                          </div>
                          <div className="progress-line"><span className="bootstrap"></span></div>
                          <div className="bar">
                            <div className="info">
                              <span>JAVASCRIPT</span>
                            </div>
                            <div className="progress-line">
                              <span className="javascript"></span>
                            </div>
                            <div className="bar">
                              <div className="info">
                                <span>C Programming</span>
                              </div>
                              <div className="progress-line"><span className="c"></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
      </section>
    </div>
  );
}

export default App;
