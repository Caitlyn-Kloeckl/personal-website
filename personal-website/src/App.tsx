import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import profileImage from "./profile-image.jpg";
import AIPaper from "./Artificial-Intelligence-Final-Paper.jpg";
import ComputationalPaper from "./Computational-Physics-Final-Paper.jpg";
import ExperimentalPaper from "./Experimental-Physics-Final-Paper.jpg";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container className="navbar">
          <Nav>
            <Nav.Link className="navbar-text" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#resume">
              Resume
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="navbar-text" href="#projects">
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <header id="home" className="title-section">
        <h1 className="main-title">Caitlyn Kloeckl</h1>
        <h4>Software Engineer, Physics Major, Photographer, Plant Lover. </h4>
        <hr className="line"></hr>
        <div className="col-lg-8">
          <div
            style={{
              display: "inline-block",
              paddingLeft: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingRight: "20px",
            }}
          >
            <a
              href="https://www.linkedin.com/in/caitlyn-kloeckl/"
              target="_blank"
              className="social-buttons"
            >
              <i
                style={{ paddingRight: "20px" }}
                className="fa fa-linkedin"
              ></i>
              LinkedIn
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              paddingLeft: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingRight: "20px",
            }}
          >
            <a
              href="https://www.caitlynkloecklphotography.com/"
              target="_blank"
              className="social-buttons"
            >
              <i style={{ paddingRight: "20px" }} className="fa fa-camera"></i>
              Photography
            </a>
          </div>
        </div>
      </header>
      <section id="quote" className="quote-section">
        <div className="container">
          <div className="row">
            <div style={{ textAlign: "center" }} className="col-lg-4 col-sm-1">
              <h2>GRIT (n.)</h2>
            </div>
            <div className="col-lg-7">
              <div>
                <h3 style={{ textAlign: "left" }}>
                  "Courage and determination despite difficulty." <br></br> "Firmness of character; indomitable spirit."
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ backgroundColor: "#243625", height: "25vw"}}></div>
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div
              style={{ paddingTop: "30px", paddingBottom: "30px" }}
              className=" col-lg-4 col-sm-1"
            >
              <img src={profileImage} width="250" height="350" />
            </div>
            <div className="col-lg-8 text-start">
              <div>
                <h2>About Me</h2>
                <p className="about-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
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
                <a
                  style={{ width: "260px" }}
                  className="social-buttons"
                  href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Resume.pdf"
                >
                  <i
                    style={{ paddingRight: "20px" }}
                    className="fa fa-download"
                  ></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resume" className="resume-section">
        <div className="container" style={{ paddingTop: "25px", paddingBottom: "25px", paddingLeft: "25px" }}>
          <div className="row">
            <div className="col-lg-4 col-sm-1">
              <h2 className="resume-main-titles">Education</h2>
            </div>
            <div className="col-lg-7 text-start">
              <div>
                <h3 className="resume-secondary-titles">
                  University of Minnesota - College of Science and Engineering
                </h3>
                <p className="resume-tertiary-titles">
                  <i>Bachelor of Science</i> • Expected December 2021
                </p>
                <ul className="resume-text">
                  <li>Major: Physics with Computational Emphasis .</li>
                  <li>Graduating early; completed two years of college during high school.</li>
                </ul>
              </div>
              <div>
                <h3 className="resume-secondary-titles">
                  Normandale Community College
                </h3>
                <p className="resume-tertiary-titles">
                  <i>PSEO (college in high school)</i> • September 2017 – December 2018
                </p>
                <ul className="resume-text">
                  <li>Dean’s List</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line-resume"></hr>
        <div className="container" style={{ paddingTop: "25px", paddingBottom: "25px", paddingLeft: "25px" }}>
          <div className="row">
            <div className="col-lg-4 col-sm-1">
              <h2 className="resume-main-titles">
                Work <br></br>Experience
              </h2>
            </div>
            <div className="col-lg-7 text-start">
              <div>
                <h3 className="resume-secondary-titles">
                  QA Automation Intern
                </h3>
                <p className="resume-tertiary-titles">
                  <i>Code42</i> • June 2019 – Current
                </p>
                <ul className="resume-text">
                  <li>Working on front-end development for testing software in Angular/TypeScript.</li>
                  <li>Creating and monitoring automated E2E (end-to-end) tests.</li>
                  <li>Continuously discussing and improving testing software in a team environment.</li>
                </ul>
                <h3 className="resume-secondary-titles">
                  Technology Help Specialist
                </h3>
                <p className="resume-tertiary-titles">
                  <i>University of Minnesota IT</i> • October 2019 – June 2021
                </p>
                <ul className="resume-text">
                  <li>Answered calls and troubleshooted technology issues around campus.</li>
                  <li>Helped create solutions as a team in a fast-paced environment.</li>
                  <li>Worked remotely in a professional manner.</li>
                </ul>
                <h3 className="resume-secondary-titles">
                  Technology Help Training Mentor
                </h3>
                <p className="resume-tertiary-titles">
                  <i>University of Minnesota IT</i> • October 2020 – June 2021
                </p>
                <ul className="resume-text">
                  <li>Assisted in training new Service Desk Employees remotely.</li>
                  <li>This included assisting new employees with learning the software, handling calls, and navigating customer's issues respectfully.</li>
                </ul>
                <h3 className="resume-secondary-titles">
                  Photographer - Self Employed
                </h3>
                <p className="resume-tertiary-titles">
                  <i>Minnesota </i> • September 2020 – Current
                </p>
                <ul className="resume-text">
                  <li>Minnesota-based photographer offering family pictures, senior photos, and more upon request.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="line-resume"></hr>
      </section>
      <section id="skills" className="skills-section">
        <div className="container" style={{ paddingTop: "25px", paddingBottom: "25px", paddingLeft: "25px" }}>
          <div className="row">
            <div style={{ paddingTop: "25px" }} className="col-lg-4 col-sm-1">
              <h2 className="resume-main-titles">Skills</h2>
            </div>
            <div className="col-lg-8">
              <div>
                <div style={{ paddingLeft: "0px", paddingTop: "0px" }} className="container">
                  <div className="skills-bar">
                    <div className="bar">
                      <div className="info">ANGULAR</div>
                      <div className="progress-line">
                        <span className="angular"></span>
                      </div>
                      <div className="bar">
                        <div className="info">TYPESCRIPT</div>
                        <div className="progress-line">
                          <span className="typescript"></span>
                        </div>
                        <div className="bar">
                          <div className="info">HTML</div>
                          <div className="progress-line">
                            <span className="html"></span>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>TEST AUTOMATION</span>
                            </div>
                            <div className="progress-line">
                              <span className="test-automation"></span>
                            </div>
                            <div className="bar">
                              <div className="info">
                                <span>CSS</span>
                              </div>
                              <div className="progress-line">
                                <span className="css"></span>
                              </div>
                              <div className="bar">
                                <div className="info">
                                  <span>BOOTSTRAP</span>
                                </div>
                                <div className="progress-line">
                                  <span className="bootstrap"></span>
                                </div>
                                <div className="bar">
                                  <div className="info">
                                    <span>MATLAB</span>
                                  </div>
                                  <div className="progress-line">
                                    <span className="matlab"></span>
                                  </div>
                                  <div className="bar">
                                    <div className="info">
                                      <span>REACT</span>
                                    </div>
                                    <div className="progress-line">
                                      <span className="react"></span>
                                    </div>
                                    <div className="bar">
                                      <div className="info">
                                        <span>JAVA</span>
                                      </div>
                                      <div className="progress-line">
                                        <span className="java"></span>
                                      </div>
                                      <div className="bar">
                                        <div className="info">
                                          <span>PYTHON</span>
                                        </div>
                                        <div className="progress-line">
                                          <span className="python"></span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <div className="container" >
          <div className="row">
            <h2 className="project-main-titles">Projects and Papers</h2>
          </div>
          <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
            <a href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Artificial-Intelligence-Final-Paper.pdf">
              <span className="image-box" style={{ backgroundImage: `url(${AIPaper})` }}>
                <span className="caption">
                  <h3>Algorithms for Solving the<br></br> Game of <br></br>Sudoku</h3>
                  <h5>CSCI 4511W</h5>
                </span>
              </span>
            </a>
            <a href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Computational-Physics-Final-Paper.pdf">
              <span className="image-box" style={{ backgroundImage: `url(${ComputationalPaper})` }}>
                <span className="caption">
                  <h3>The Lorenz <br></br>System</h3>
                  <h5>PHYS 4041</h5>
                </span>
              </span>
            </a>
            <a href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Experimental-Physics-Final-Paper.pdf">
              <span className="image-box" style={{ backgroundImage: `url(${ExperimentalPaper})` }}>
                <span className="caption">
                  <h3>Measuring the <br></br>Speed of Light Using a Helium Neon Laser</h3>
                  <h5>PHYS 4052W</h5>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
