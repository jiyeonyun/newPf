import React from 'react';
import styles from './main.module.css';
const Main = (props) => {
    
    return(
        <section className={styles.section}>
            <h2 className={styles.mainTitle}>
                EVER-GROWING
            </h2>
            <h3 className={styles.secondTitle}>
                YUN JI YEON'S <br/>
                PORTFOLIO
            </h3>
            <div className={styles.imgWrap}>
                <img src="" alt="" />
            </div>
            <p className={styles.mainDesc}>
                성실함을 이기는 것은 없습니다. <br/>
                매일 도전하고 기록하는<br />
                프론트엔드 개발자 윤지연 입니다.
            </p>
            <button className={styles.button}>
                이력서 바로가기
            </button>
        </section>
        
    );
};

export default Main;