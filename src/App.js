import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Data from './bd';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
