import './App.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import NavBarMenu from './components/nav/Nav';
import Btn from './components/Btn/Btn';
import SkillsSection from './components/SkillsSection/SkillsSection';
import Data from './bd';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import Brightness5Icon from '@mui/icons-material/Brightness5';
// import Brightness3Icon from '@mui/icons-material/Brightness3';

function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`App ${isDark ? "Dark" : "Light"} `}>
      <NavBarMenu />
      <Header />
      <About />
      <Projects data={Data} />
      <SkillsSection />
      <Footer />
      <Btn
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />

      </Btn>
    </div>
  );
}

export default App;
