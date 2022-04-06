import React from 'react';
import Header from '../header/header';
import styles from './main.module.css';
const Main = (props) => {
    
    return(
        <>
        <Header/>
        <section className={styles.section}>
            <h2 className={styles.mainTitle}>
                EVER⎯⎯GROWING
            </h2>
            <h3 className={styles.secondTitle}>
                YUN JI YEON'S <br/>
                PORTFOLIO
            </h3>
            <div className={styles.imgWrap}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/img/header.png'} alt="" />
            </div>
            <p className={styles.mainDesc}>
                성실함을 이기는 것은 없습니다. <br/>
                매일 도전하고 기록하는<br />
                프론트엔드 개발자 윤지연 입니다.
            </p>
            <button className={styles.button}>
                <a className={styles.buttona} href='./assets/resume.pdf' download="">이력서 PDF</a>
            </button>
        </section>
        </>
    );
};

export default Main;