import React from 'react';
import styles from './about.module.css';
const About = (props) => {
    
    return(
        <section className={styles.section}>
            <h1 className={styles.menutitle}>About me</h1>
            <div className={styles.imgWrap}>
                <img src="" alt="" />
            </div>
            <h2 className={styles.aboutTitle}>
                "안녕하세요👋 매일 기록하고 도전하는, 윤지연입니다." 
            </h2>
            <p className={styles.aboutDes}>
                <br/>
                Think Positive! 항상 긍정의 힘을 믿으며 앞으로 나아갑니다.<br/>
                협업을 위해 배려하며, 성장하기 위해 노력합니다.<br/>
            </p>
        </section>
    );
};

export default About;