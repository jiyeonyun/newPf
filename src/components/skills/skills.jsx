import React from 'react';
import styles from './skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faHtml5,faCss3,faJs,faReact,faBootstrap,faSass,faFigma} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Header from '../header/header';
const Skills = (props) => {

    return(
        <>
        <Header/>
        <section className={styles.section}>
            <h1 className={styles.menutitle}>SKILLS & TOOLS</h1>
            <h2 className={styles.subtitle}>What I Have</h2>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faHtml5} className={styles.icon} style={{color:'#E34F26'}} /></div>
                    <span className={styles.span}>HTML5</span>
                </li>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faCss3} className={styles.icon} style={{color:'#1572B6'}} /></div>
                    <span className={styles.span}>CSS3</span>
                </li>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faJs} className={styles.icon} style={{color:'#F7DF1E'}}/></div>             
                    <span className={styles.span}>Javascript</span>
                </li>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faReact} className={styles.icon} style={{color:'#61DAFB'}} /></div>
                    <span className={styles.span}>React</span>
                </li>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faGithub} className={styles.icon} style={{color:'#181717'}} /></div>
                    <span className={styles.span}>GitHub</span>
                </li>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faBootstrap} className={styles.icon} style={{color:'#7952B3'}} /></div>
                    <span className={styles.span}>Bootstrap</span>
                </li>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faSass} className={styles.icon} style={{color:'#CC6699'}} /></div>
                    <span className={styles.span}>Sass</span>
                </li>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faCode} className={styles.icon} style={{color:'#007ACC'}} /></div> 
                    <span className={styles.span}>Visual Studio Code</span>
                </li>
                <li className={styles.li}>
                    <div className={styles.iconWrap}><FontAwesomeIcon icon={faFigma} className={styles.icon} style={{color:'#F24E1E'}} /></div>
                    <span className={styles.span}>Figma</span>
                </li>
            </ul>
        </section>
        </>
    );
};

export default Skills;