import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import {Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
      {/* <p>Check if this renders</p> */}
    </div>
  );
}

export default App;
