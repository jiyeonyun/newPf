import React from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faUserPen } from "@fortawesome/free-solid-svg-icons";
import Header from '../header/header';
const Contact = (props) => {
    return(
        <>
        <Header/>
        <section className={styles.section}>
            <h1 className={styles.menutitle}>CONTACT</h1>
            <h3 className={styles.subtitle}>Contact me on...</h3>
            <div className={styles.contactWrap}>
                <span className={styles.span}><FontAwesomeIcon icon={faEnvelope} className={styles.icon} />jiyeon5524@naver.com</span>
                <span className={styles.span}><FontAwesomeIcon icon={faUserPen} className={styles.icon} />01020557663</span>
                <span className={styles.span}><FontAwesomeIcon icon={faGithub} className={styles.icon} />jiyeonyun Github</span>
            </div>
        </section>
        </>
    );
};

export default Contact;