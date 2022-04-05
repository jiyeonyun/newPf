import React from 'react';
import styles from './contact.module.css';
const Contact = (props) => {
    return(
        <section className={styles.section}>
            <h1 className={styles.menutitle}>CONTACT</h1>
            <h3 className={styles.subTitle}>Contact me on...</h3>
            <span className={styles.span}>jiyeon5524@naver.com</span>
            <span className={styles.span}>resume</span>
            <span className={styles.span}>jiyeon yun github</span>
        </section>
    );
};

export default Contact;