import React from 'react';
import styles from './footer.module.css';
const Footer = (props) => {
    
    return(
        <footer className={styles.footer}>
            <p className={styles.p}>Coded By Jiyeon Yun</p>
            <p className={styles.p}>You can see Code Here</p>
        </footer>
    );
};

export default Footer;