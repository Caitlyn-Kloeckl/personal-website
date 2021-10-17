import React from 'react';
import styles from './Skills.module.css';

const Skills = () => (
  <div className="container" style={{ paddingTop: "25px", paddingBottom: "25px", paddingLeft: "25px" }}>
    <div className="row">
      <div style={{ paddingTop: "25px" }} className="col-lg-4 col-sm-1">
        <h2 className={styles.skills_main_titles}>Skills</h2>
      </div>
      <div className="col-lg-8">
        <div>
          <div style={{ paddingLeft: "0px", paddingTop: "0px" }} className="container">
            <div className={styles.skills_bar}>
              <div className={styles.bar}>
                <div className={styles.info}>ANGULAR</div>
                <div className={styles.progress_line}>
                  <span className={styles.angular}></span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.info}>TYPESCRIPT</div>
                  <div className={styles.progress_line}>
                    <span className={styles.typescript}></span>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.info}>HTML</div>
                    <div className={styles.progress_line}>
                      <span className={styles.html}></span>
                    </div>
                    <div className={styles.bar}>
                      <div className={styles.info}>
                        <span>TEST AUTOMATION</span>
                      </div>
                      <div className={styles.progress_line}>
                        <span className={styles.test_automation}></span>
                      </div>
                      <div className={styles.bar}>
                        <div className={styles.info}>
                          <span>CSS</span>
                        </div>
                        <div className={styles.progress_line}>
                          <span className={styles.css}></span>
                        </div>
                        <div className={styles.bar}>
                          <div className={styles.info}>
                            <span>BOOTSTRAP</span>
                          </div>
                          <div className={styles.progress_line}>
                            <span className={styles.bootstrap}></span>
                          </div>
                          <div className={styles.bar}>
                            <div className={styles.info}>
                              <span>MATLAB</span>
                            </div>
                            <div className={styles.progress_line}>
                              <span className={styles.matlab}></span>
                            </div>
                            <div className={styles.bar}>
                              <div className={styles.info}>
                                <span>REACT</span>
                              </div>
                              <div className={styles.progress_line}>
                                <span className={styles.react}></span>
                              </div>
                              <div className={styles.bar}>
                                <div className={styles.info}>
                                  <span>JAVA</span>
                                </div>
                                <div className={styles.progress_line}>
                                  <span className={styles.java}></span>
                                </div>
                                <div className={styles.bar}>
                                  <div className={styles.info}>
                                    <span>PYTHON</span>
                                  </div>
                                  <div className={styles.progress_line}>
                                    <span className={styles.python}></span>
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
);

export default Skills;
