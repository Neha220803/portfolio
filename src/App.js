import './App.css';
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
      <section><ExpiriencePage /></section>
      <section><ProjectPage /></section>
      <SkillsPage />
      <section><EducationPage /></section>
      <section><ContactPage /></section>
    </div>
  );
}

export default App;
