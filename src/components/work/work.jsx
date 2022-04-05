import React from 'react';
import styles from './work.module.css';
const Work = (props) => {
    
    return(
        <section className={styles.section}>
            <h1 className={styles.menutitle}>Work</h1>
            <h2 className={styles.subtitle}>What I Have Created</h2>
            <div className={styles.worksWrap}>
                <div className={styles.workWrap}>
                    <div className={styles.imgWrap}>
                        <img className={styles.img} src="./img/reactMovie.png" alt="" />
                    </div>
                    <div className={styles.workDes}>
                        <h4 className={styles.workName}>영화추천페이지</h4>
                        <div className={styles.workSkills}>
                            <span className={styles.workSkill} style={{backgroundColor:'red',color:'whitesmoke'}}>#Movie api</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#61DAFB',color:'black'}}>#React</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#1572B6',color:'whitesmoke'}}>#Css</span>
                        </div>
                        <div className={styles.workButton}>
                            <button className={styles.button}>Go!</button>
                            <button className={styles.button}>GitHub</button>
                        </div>
                    </div>
                </div>
                <div className={styles.workWrap}>
                    <div className={styles.imgWrap}>
                        <img className={styles.img} src="./img/mbti.png" alt="" />
                    </div>
                    <div className={styles.workDes}>
                        <h4 className={styles.workName}>mbti 카드메이커</h4>
                        <div className={styles.workSkills}>
                            <span className={styles.workSkill} style={{backgroundColor:'#FFCA28',color:'black'}}>#fireBase</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#61DAFB',color:'black'}}>#React</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#1572B6',color:'whitesmoke'}}>#Css</span>
                        </div>
                        <div className={styles.workButton}>
                            <button className={styles.button}>Go!</button>
                            <button className={styles.button}>GitHub</button>
                        </div>
                    </div>
                </div>
                <div className={styles.workWrap}>
                    <div className={styles.imgWrap}>
                        <img className={styles.img} src="./img/youtube.png" alt="" />
                    </div>
                    <div className={styles.workDes}>
                        <h4 className={styles.workName}>유튜브 클론코딩</h4>
                        <div className={styles.workSkills}>
                            <span className={styles.workSkill} style={{backgroundColor:'red',color:'whitesmoke'}}>#Youtube api</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#61DAFB',color:'black'}}>#React</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#1572B6',color:'whitesmoke'}}>#Css</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#FF6C37',color:'whitesmoke'}}>#Postman</span>
                        </div>
                        <div className={styles.workButton}>
                            <button className={styles.button}>Go!</button>
                            <button className={styles.button}>GitHub</button>
                        </div>
                    </div>
                </div>
                <div className={styles.workWrap}>
                    <div className={styles.imgWrap}>
                        <img className={styles.img} src="./img/tracker.png" alt="" />
                    </div>
                    <div className={styles.workDes}>
                        <h4 className={styles.workName}>스터디 뽀모도로</h4>
                        <div className={styles.workSkills}>
                            <span className={styles.workSkill} style={{backgroundColor:'#61DAFB',color:'black'}}>#React</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#1572B6',color:'whitesmoke'}}>#Css</span>
                        </div>
                        <div className={styles.workButton}>
                            <button className={styles.button}>Go!</button>
                            <button className={styles.button}>GitHub</button>
                        </div>
                    </div>
                </div>
                <div className={styles.workWrap}>
                    <div className={styles.imgWrap}>
                        <img className={styles.img} src="./img/myPhone.png" alt="" />
                    </div>
                    <div className={styles.workDes}>
                        <h4 className={styles.workName}>토이프로젝트 모음 어플</h4>
                        <div className={styles.workSkills}>
                            <span className={styles.workSkill} style={{backgroundColor:'rgb(104, 160, 100)',color:'whitesmoke'}}>#weather api</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#61DAFB',color:'black'}}>#React</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#1572B6',color:'whitesmoke'}}>#Css</span>
                        </div>
                        <div className={styles.workButton}>
                            <button className={styles.button}>Go!</button>
                            <button className={styles.button}>GitHub</button>
                        </div>
                    </div>
                </div>
                <div className={styles.workWrap}>
                    <div className={styles.imgWrap}>
                        <img className={styles.img} src="./img/wordle.png" alt="" />
                    </div>
                    <div className={styles.workDes}>
                        <h4 className={styles.workName}>Wordle</h4>
                        <div className={styles.workSkills}>
                            <span className={styles.workSkill} style={{backgroundColor:'#F7DF1E',color:'black'}}>#JavaScript</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#E34F26',color:'white'}}>#HTML</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#1572B6',color:'whitesmoke'}}>#Css</span>
                        </div>
                        <div className={styles.workButton}>
                            <button className={styles.button}>Go!</button>
                            <button className={styles.button}>GitHub</button>
                        </div>
                    </div>
                </div>
                <div className={styles.workWrap}>
                    <div className={styles.imgWrap}>
                        <img className={styles.img} src="./img/carrot.png" alt="" />
                    </div>
                    <div className={styles.workDes}>
                        <h4 className={styles.workName}>당근게임</h4>
                        <div className={styles.workSkills}>
                            <span className={styles.workSkill} style={{backgroundColor:'#F7DF1E',color:'black'}}>#JavaScript</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#E34F26',color:'white'}}>#HTML</span>
                            <span className={styles.workSkill} style={{backgroundColor:'#1572B6',color:'whitesmoke'}}>#Css</span>
                        </div>
                        <div className={styles.workButton}>
                            <button className={styles.button}>Go!</button>
                            <button className={styles.button}>GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;