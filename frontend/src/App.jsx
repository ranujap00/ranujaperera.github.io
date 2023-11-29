import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Home from './components/Home';
import MobileNavBar from './components/MobileNavBar';
import NavBar from './components/NavBar'
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience ';

function App() {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <MobileNavBar />
      <Home />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Contact />
      <footer>
        <div className="copyright-logo">
          <i className="fa-regular fa-copyright"></i>
          <p>Ranuja Perera</p>
        </div>
      </footer>
    </div>
  )
}
export default App