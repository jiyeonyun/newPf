import styles from './app.module.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Skills from './components/skills/skills';
import Work from './components/work/work';

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
    <div className={styles.miniMenu}>
      <ul className={styles.menu}>
        <li className={styles.menuLi}></li>
        <li className={styles.menuLi}></li>
        <li className={styles.menuLi}></li>
      </ul>
    </div>
    </>
  );
}

export default App;
