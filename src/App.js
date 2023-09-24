import './App.css';
import AboutMe from './components/AboutMe';
import FirstTab from './components/FirstTab';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <FirstTab />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
