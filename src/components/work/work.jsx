import React from 'react';
import Header from '../header/header';
import styles from './work.module.css';
const Work = (props) => {
    
    return(
    <>
        <Header/>
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
                            <a href="https://jiyeonyun.github.io/ReactMovie/ " target="_blank" className={styles.button}>Go!</a>
                            <a href="https://github.com/jiyeonyun/ReactMovie" target="_blank" className={styles.button}>GitHub</a>
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
                            <a href="https://jiyeonyun.github.io/mbti_card/" target="_blank" className={styles.button}>Go!</a>
                            <a href="https://github.com/jiyeonyun/mbti_card" target="_blank" className={styles.button}>GitHub</a>
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
                            <a href="https://jiyeonyun.github.io/Youtube_Project/ " target="_blank" className={styles.button}>Go!</a>
                            <a href="https://github.com/jiyeonyun/Youtube_Project" target="_blank" className={styles.button}>GitHub</a>
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
                            <a href="https://jiyeonyun.github.io/habitTracker_renewal/ " target="_blank" className={styles.button}>Go!</a>
                            <a href="https://github.com/jiyeonyun/habitTracker_renewal" target="_blank" className={styles.button}>GitHub</a>
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
                            <a href="https://jiyeonyun.github.io/my_phone/ " target="_blank" className={styles.button}>Go!</a>
                            <a href="https://github.com/jiyeonyun/my_phone" target="_blank" className={styles.button}>GitHub</a>
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
                            <a href="https://jiyeonyun.github.io/wordle/ " target="_blank" className={styles.button}>Go!</a>
                            <a href="https://github.com/jiyeonyun/wordle" target="_blank" className={styles.button}>GitHub</a>
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
                            <a href="" target="_blank" className={styles.button}>Go!</a>
                            <a href="https://github.com/jiyeonyun/carrot_game" target="_blank" className={styles.button}>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default Work;