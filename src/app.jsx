import styles from './app.module.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Skills from './components/skills/skills';
import Work from './components/work/work';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className={styles.app}>
    <Header/>
    <Main/> 
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/> 
    <div className={styles.miniMenu}>
      <ul className={styles.menu}>
        <li className={styles.menuLi}><FontAwesomeIcon icon={faGithub} className={styles.icon} /></li>
        <li className={styles.menuLi}><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /></li>
        <li className={styles.menuLi}><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></li>
      </ul>
    </div>
    </div>
  );
}

export default App;
