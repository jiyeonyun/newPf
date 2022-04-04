import React from 'react';
import styles from './work.module.css';
const Work = (props) => {
    
    return(
        <section className={styles.section}>
            <h1 className={styles.menutitle}>Work</h1>
            <h2 className={styles.subtitle}>What I Have Created</h2>
            <div className={styles.workWrap}>
                <img src="" alt="" />
                <div className={styles.workDes}>
                    <h4 className={styles.workName}></h4>
                    <div className={styles.workButton}>
                        <button className={styles.button}>Go!</button>
                        <button className={styles.button}>GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;