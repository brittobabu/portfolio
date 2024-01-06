import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return(
        <section className={styles.container}>
             <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Britto Babu</h1>
                <p className={styles.description}>
                As current CS student with a passion for coding and a fresh perspective on software engineering. My goal is to embark on an exciting journey as a software engineer, contributing innovative solutions and continuously expanding my knowledge in the field.</p>
                <a href="mailto:brittobabu2000@gmail.com" 
                className={styles.contactBtn}> Contact me </a>
             </div>
             <img src= {getImageUrl("hero/heroImage.png")} alt ="hero Image" 
             className={styles.heroImg} />
             <div className={ styles.topBlur}></div>
             <div className={ styles.bottomBlur}></div>
        </section>
       
    );
}