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
      <section id="home"><HeroPage /></section>
      <section id="about" className="d-flex align-items-center justify-content-center flex-column">
        <AboutPages />
      </section>
      <section id="experience" >
        <ExpiriencePage />
      </section>
      <section id="projects" className="d-flex align-items-center justify-content-center flex-column">
        <ProjectPage />
      </section>
      <section id="skills" className="d-flex align-items-center justify-content-center flex-column">
        <SkillsPage />
      </section>
      <section id="education">
        <EducationPage />
      </section>
      <section id="contact" >
        <ContactPage />
      </section>
    </div>
  );
}

export default App;
