import React from 'react';
import styles from './header.module.css';

const Header = (props) =>{
    return(
        <header className={styles.header}>
            <h3 className={styles.headerTitle}>JIYEON</h3>
            <nav className={styles.nav}>
                <span className={styles.navItem}>ABOUT</span>
                <span className={styles.navItem}>SKILL</span>
                <span className={styles.navItem}>WORKS</span>
                <span className={styles.navItem}>CONTACT</span>
            </nav>
        </header>
    );

};

export default Header;