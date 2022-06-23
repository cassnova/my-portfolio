import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
