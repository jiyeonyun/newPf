import React from 'react';
import styles from './skills.module.css';
const Skills = (props) => {
    
    return(
        <section className={styles.section}>
            <h1 className={styles.menutitle}>About me</h1>
            <h2 className={styles.subtitle}>What I Have</h2>
            <ul className={styles.ul}>
                <li className={styles.lil}>
                    <img src="" alt="" />
                    <span className={styles.span}>HTML5</span>
                </li>
                <li className={styles.lil}>
                    <img src="" alt="" />
                    <span className={styles.span}>CSS3</span>
                </li>
                <li className={styles.lil}>
                    <img src="" alt="" />
                    <span className={styles.span}>Javascript</span>
                </li>
                <li className={styles.lil}>
                    <img src="" alt="" />
                    <span className={styles.span}>React</span>
                </li>
                <li className={styles.lil}>
                    <img src="" alt="" />
                    <span className={styles.span}>GitHub</span>
                </li>
                <li className={styles.lil}>
                    <img src="" alt="" />
                    <span className={styles.span}>Bootstrap</span>
                </li>
                <li className={styles.lil}>
                    <img src="" alt="" />
                    <span className={styles.span}>Sass</span>
                </li>
                <li className={styles.lil}>
                    <img src="" alt="" />
                    <span className={styles.span}>Postman</span>
                </li>
            </ul>
        </section>
    );
};

export default Skills;