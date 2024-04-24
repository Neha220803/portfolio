import './App.css';
import AboutPages from './components/about/AboutPages';
import ContactPage from './components/contact/ContactPage';
import EducationPage from './components/edu/EducationPage';
import ExpiriencePage from './components/exp/ExpiriencePage';
import HeroPage from './components/hero/HeroPage';
import NavBar from './components/nav/NavBarComp';
import ProjectPage from './components/projects/ProjectPage';
import SkillsPage from './components/skills/SkillsPage';

function App() {
  return (
    <div>
      <NavBar />
      <section><HeroPage /></section>
      <section className="d-flex align-items-center justify-content-center flex-column">
        <AboutPages />
      </section>
      <section ><ExpiriencePage /></section>
      <section className="d-flex align-items-center justify-content-center flex-column"><ProjectPage /></section>
      <section className="d-flex align-items-center justify-content-center flex-column">   <SkillsPage /></section>

      <section ><EducationPage /></section>
      <section><ContactPage /></section>
    </div>
  );
}

export default App;
