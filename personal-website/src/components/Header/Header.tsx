import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';

const Header = () => (
  <div>
    <Navbar>
      <Container className={styles.navbar}>
        <Nav>
          <Nav.Link className={styles.navbar_text} href="#home">
            Home
          </Nav.Link>
          <Nav.Link className={styles.navbar_text} href="#about">
            About
          </Nav.Link>
          <Nav.Link className={styles.navbar_text} href="#resume">
            Resume
          </Nav.Link>
          <Nav.Link className={styles.navbar_text} href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link className={styles.navbar_text} href="#projects">
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <header id="home" className={styles.title_section}>
      <h1 className={styles.main_title}>Caitlyn Kloeckl</h1>
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
            className="custom-button"
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
            className="custom-button"
          >
            <i style={{ paddingRight: "20px" }} className="fa fa-camera"></i>
            Photography
          </a>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
