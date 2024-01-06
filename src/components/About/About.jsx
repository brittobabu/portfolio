import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return(
        <section className={styles.container} id="Education" >
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <img 
                src={getImageUrl("about/aboutImage.png")}  alt="Me sitting with laptop" 
                className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/nus.jpg")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                        <h2>National University of Singapore</h2>
                            <h3>Bachelor in Computer Science (Aug 2022 - Present)</h3>
                            <p>
                            <ul>
                                    <li>
                                        Specialized in Software Engineering
                                    </li>
                                    <li>
                                        GPA: 4.85/5.0
                                    </li>
                                    <li>
                                    Completed courses in Data structures and algorithms, Databases and web designing, Networking
and Security, Calculus for Computing & Linear Algebra, Discrete Structures and so on.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/tp.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                        <h2>Temasek Polytechnic Singapore</h2>
                            <h3>Diploma in Mechatronics Engineering (April 2018 - April 2021)</h3>
                            <p>
                                <ul>
                                    <li>
                                        Specialized in Robotics and Automation
                                    </li>
                                    <li>
                                        GPA: 3.76/4.0
                                    </li>
                                    <li>
                                    Completed courses in automation and machine vision,
analytical robotics, computer programming, digital fundamentals, and circuit analysis.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>          
        </section>
    );
};