import './App.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import NavBarMenu from './components/nav/Nav';



function App() {
  return (
    <div className="App">
      <NavBarMenu />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
