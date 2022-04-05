import React from 'react';
import styles from './footer.module.css';
const Footer = (props) => {
    
    return(
        <footer className={styles.footer}>
            <p className={styles.p}>Coded By <span className={styles.span}> Jiyeon Yun</span></p>
            <p className={styles.p}>You can see <a className={styles.span} href="">Code</a> Here</p>
        </footer>
    );
};

export default Footer;