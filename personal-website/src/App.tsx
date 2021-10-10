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
      <header id="home" className="App-header">
        <h1 className="main-title">
          Caitlyn Kloeckl
      </h1>
        <h4>
          Software Engineer, Physics Major, Photographer, Plant Lover. </h4>
        <hr className="line"></hr>
        <div className="col-lg-8">
          <a style={{ display: "inline-block" }} href="https://www.linkedin.com/in/caitlyn-kloeckl/" className="social-buttons"><i style={{ paddingRight: "20px" }} className="fa fa-linkedin"></i>LinkedIn</a>
          <div style={{ display: "inline-block" }} className="col-sm-1"></div>
          <a style={{ display: "inline-block" }} href="https://www.caitlynkloecklphotography.com/" className="social-buttons"><i style={{ paddingRight: "20px" }} className="fa fa-camera"></i>Photography</a>
        </div>
      </header>
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div style={{ paddingTop: "30px" }} className=" col-lg-4 col-sm-1">
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
              <div style={{ paddingTop: "20px" }}>
                <a style={{ width: "260px" }} className="social-buttons" href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Resume.pdf"><i style={{ paddingRight: "20px" }} className="fa fa-download"></i>Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="resume" className="App-header">
      </section>
      <section id="projects" className="App-header">
      </section>
    </div>
  );
}

export default App;
