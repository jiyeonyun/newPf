import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
const Header = (props) =>{
    const navigator = useNavigate();
    const goTo = (gogo)=>{
        navigator(`/${gogo}`);
    };
    const onClick = (e)=>{
        const values = e.target.textContent;
        goTo(values);
    };
    const goHome = ()=>{
        navigator('/');
    }
    return(
        <header className={styles.header}>
            <h3 className={styles.headerTitle} onClick={goHome}>JIYEON</h3>
            <nav className={styles.nav}>
                <span className={styles.navItem} onClick={onClick}>ABOUT</span>
                <span className={styles.navItem} onClick={onClick}>SKILL</span>
                <span className={styles.navItem} onClick={onClick}>WORKS</span>
                <span className={styles.navItem} onClick={onClick}>CONTACT</span>
            </nav>
        </header>
    );

};

export default Header;