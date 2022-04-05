import React from 'react';
import Header from '../header/header';
import styles from './about.module.css';
const About = (props) => {
    
    return(
    <>
        <Header/>
        <section className={styles.section}>
            <h1 className={styles.menutitle}>About me</h1>
            <div className={styles.imgWrap}>
                <img className={styles.img} src="./img/about.jpg" alt="" />
            </div>
            <h2 className={styles.aboutTitle}>
                "안녕하세요👋 매일 기록하고 도전하는, 윤지연입니다." 
            </h2>
            <p className={styles.aboutDes}>
                <br/>
                Think Positive! 항상 긍정의 힘을 믿으며 앞으로 나아갑니다.<br/>
                협업을 위해 배려하며, 성장하기 위해 노력합니다.<br/>
            </p>
            <dl className={styles.dl}>
                <dt className={styles.dt}>🎓Education</dt>
                <dd className={styles.dd}>계명대학교 경영정보학과 졸업</dd>
                <dd className={styles.dd}>그린컴퓨터 아카데미 웹디자인/웹퍼블리셔/UI/UX 과정 수료</dd>
                <dd className={styles.dd}>드림코딩아카데미 프론트엔드 필수 브라우저 101수료</dd>
                <dd className={styles.dd}>드림코딩아카데미 드림코딩아카데미 리액트 개념정리/실전 프로젝트 수료</dd>
            </dl>
            <dl className={styles.dl}>
                <dt className={styles.dt}>📝Certificate</dt>
                <dd className={styles.dd}>한국산업인력공단 - 정보처리기사 취득</dd>
            </dl>
        </section>
    </>
    );
};

export default About;