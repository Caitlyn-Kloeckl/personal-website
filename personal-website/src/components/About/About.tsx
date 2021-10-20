import React from "react";
import styles from "./About.module.css";
import profileImage from "../../profile-image.jpg";

const About = () => (
  <div className="container">
    <div className="row" style={{ paddingTop: "30px"}}>
      <div
        style={{ paddingTop: "30px", paddingBottom: "30px", paddingRight: "30px" }}
        className=" col-lg-4 col-sm-1">
        <img src={profileImage} width="285" height="399"/>
      </div>
      <div className="col-lg-8 text-start">
        <div>
          <h2>About Me</h2>
          <p className={styles.about_text_noindent}>
            I started college in high school and I'm just about to graduate at
            21. Majoring in physics, I love solving problems and learning about
            the world around me.
          </p>
          <p className={styles.about_text_noindent}>
            At the University of Minnesota, I found a huge interest in the
            technology field. In class I found a huge passion for solving
            physics problems computationally and at work I found I enjoyed
            helping staff and students solve their technology problems around
            campus.
          </p>
          <p className={styles.about_text_noindent}>
            Starting my career in the technology field at Code42 has truly solidified my
            passion for the field and I haven't looked back.
          </p>
        </div>
        <div>
          <hr></hr>
          <h2>Contact Details</h2>
          <p className={styles.about_text_noindent}>
            Caitlyn.Kloeckl@gmail.com <br></br>
            Based in Minneapolis, MN
          </p>
        </div>
        <div style={{ paddingTop: "20px", paddingBottom: "30px" }}>
          <a
            style={{ width: "260px", color:"white"}}
            className="custom-button-about"
            href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Resume.pdf"
          >
            <i style={{ paddingRight: "20px", color:"white"}} className="fa fa-download"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
