import React from 'react';
import styles from './About.module.css';
import profileImage from "../../profile-image.jpg";


const About = () => (
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
          <p className={styles.about_text}>
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
          <p className={styles.about_text}>
            Caitlyn.Kloeckl@gmail.com <br></br>
            Based in Minneapolis, MN
          </p>
        </div>
        <div style={{ paddingTop: "20px", paddingBottom: "30px" }}>
          <a
            style={{ width: "260px" }}
            className="custom-button"
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
);

export default About;
