import './App.css';
import HeroPage from './components/hero/HeroPage';
import NavBar from './components/nav/NavBarComp';

function App() {
  return (
    <div>
      <NavBar />
      <section><HeroPage /></section>
      <section>Paralax</section>
      <section>Services</section>
      <section>Paralax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
