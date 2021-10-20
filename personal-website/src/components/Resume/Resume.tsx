import React from 'react';
import styles from './Resume.module.css';

const Resume = () => (
  <div>
    <div className="container" style={{ paddingTop: "25px", paddingLeft: "25px" }}>
      <div className="row">
        <div className="col-lg-4 col-sm-1">
          <h2 className={styles.resume_main_titles}>Education</h2>
        </div>
        <div className="col-lg-7 text-start">
          <div>
            <h3 className={styles.resume_secondary_titles}>
              University of Minnesota - College of Science and Engineering
            </h3>
            <p className={styles.resume_tertiary_titles}>
              <i>Bachelor of Science</i> • Expected December 2021
            </p>
            <ul className={styles.resume_text}>
              <li>Major: Physics with Computational Emphasis .</li>
              <li>Graduating early; completed two years of college during high school.</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.resume_secondary_titles}>
              Normandale Community College
            </h3>
            <p className={styles.resume_tertiary_titles}>
              <i>PSEO (college in high school)</i> • September 2017 – December 2018
            </p>
            <ul className={styles.resume_text}>
              <li>Dean’s List</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <hr className={styles.line_resume}></hr>
    <div className="container" style={{ paddingTop: "25px", paddingBottom: "25px", paddingLeft: "25px" }}>
      <div className="row">
        <div className="col-lg-4 col-sm-1">
          <h2 className={styles.resume_main_titles}>
            Work <br></br>Experience
          </h2>
        </div>
        <div className="col-lg-7 text-start">
          <div>
            <h3 className={styles.resume_secondary_titles}>
              QA Automation Intern
            </h3>
            <p className={styles.resume_tertiary_titles}>
              <i>Code42</i> • June 2019 – Current
            </p>
            <ul className={styles.resume_text}>
              <li>Working on front-end development for testing software in Angular/TypeScript.</li>
              <li>Creating and monitoring automated E2E (end-to-end) tests.</li>
              <li>Continuously discussing and improving testing software in a team environment.</li>
            </ul>
            <h3 className={styles.resume_secondary_titles}>
              Technology Help Specialist
            </h3>
            <p className={styles.resume_tertiary_titles}>
              <i>University of Minnesota IT</i> • October 2019 – June 2021
            </p>
            <ul className={styles.resume_text}>
              <li>Answered calls and troubleshooted technology issues around campus.</li>
              <li>Helped create solutions as a team in a fast-paced environment.</li>
              <li>Worked remotely in a professional manner.</li>
            </ul>
            <h3 className={styles.resume_secondary_titles}>
              Technology Help Training Mentor
            </h3>
            <p className={styles.resume_tertiary_titles}>
              <i>University of Minnesota IT</i> • October 2020 – June 2021
            </p>
            <ul className={styles.resume_text}>
              <li>Assisted in training new Service Desk Employees remotely.</li>
              <li>This included assisting new employees with learning the software, handling calls, and navigating customer's issues respectfully.</li>
            </ul>
            <h3 className={styles.resume_secondary_titles}>
              Photographer - Self Employed
            </h3>
            <p className={styles.resume_tertiary_titles}>
              <i>Minnesota </i> • September 2020 – Current
            </p>
            <ul className={styles.resume_text}>
              <li>Minnesota-based photographer offering family pictures, senior photos, and more upon request.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className={styles.line_resume}></hr>
  </div>
);

export default Resume;
