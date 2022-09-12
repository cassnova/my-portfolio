import './App.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import NavBarMenu from './components/nav/Nav';
import Btn from './components/Btn/Btn';
import Data from './bd';
import { FiSun, BsMoon } from 'react-icons/ai';
import { useState } from "react";


function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`App ${isDark ? "Dark" : "Light"} `}>
      <NavBarMenu />
      <Header />
      <About />
      <Projects data={Data} />
      <Footer />
      <Btn
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        {isDark ? "LIGHT" : "DARK"}

      </Btn>
    </div>
  );
}

export default App;
