import React from 'react';
import styles from './Projects.module.css';
import AIPaper from "../../Artificial-Intelligence-Final-Paper.jpg";
import ComputationalPaper from "../../Computational-Physics-Final-Paper.jpg";
import ExperimentalPaper from "../../Experimental-Physics-Final-Paper.jpg";

const Projects = () => (
  <div className="container" >
    <div className="row">
      <h2 className={styles.project_main_titles}>Projects and Papers</h2>
    </div>
    <div style={{ paddingTop: "25px", paddingBottom: "25px" }}>
      <a href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Artificial-Intelligence-Final-Paper.pdf">
        <span className={styles.image_box} style={{ backgroundImage: `url(${AIPaper})` }}>
          <span className={styles.caption}>
            <h3>Algorithms for Solving the<br></br> Game of <br></br>Sudoku</h3>
            <h5>CSCI 4511W</h5>
          </span>
        </span>
      </a>
      <a href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Computational-Physics-Final-Paper.pdf">
        <span className={styles.image_box} style={{ backgroundImage: `url(${ComputationalPaper})` }}>
          <span className={styles.caption}>
            <h3>The Lorenz <br></br>System</h3>
            <h5>PHYS 4041</h5>
          </span>
        </span>
      </a>
      <a href="https://github.com/Caitlyn-Kloeckl/resume-documents/raw/main/Experimental-Physics-Final-Paper.pdf">
        <span className={styles.image_box} style={{ backgroundImage: `url(${ExperimentalPaper})` }}>
          <span className={styles.caption}>
            <h3>Measuring the <br></br>Speed of Light Using a Helium Neon Laser</h3>
            <h5>PHYS 4052W</h5>
          </span>
        </span>
      </a>
    </div>

  </div>
);

export default Projects;
