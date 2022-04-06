import styles from './app.module.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Skills from './components/skills/skills';
import Work from './components/work/work';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className={styles.app}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/ABOUT' element={<About/>}/>
          <Route path='/SKILL' element={<Skills/>}/>
          <Route path='/WORKS' element={<Work/>}/>
          <Route path='/CONTACT' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/> 
    <div className={styles.miniMenu}>
      <ul className={styles.menu}>
        <li className={styles.menuLi}><a href="https://github.com/jiyeonyun" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a></li>
        <li className={styles.menuLi}><a href="mailto:jiyeon5524@naver.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /></a></li>
        <li className={styles.menuLi}><a href="https://www.instagram.com/?hl=ko" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a></li>
      </ul>
    </div>
    </div>
  );
}

export default App;
