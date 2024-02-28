import "./App.scss";
import Navbar from "./components/nav/navbar";
import About from "./components/home/about";
import Skills from "./components/skills/skills";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects">
        <Work />
      </section>
      <section id="Contact">
        <Contact/>
      </section>
    </div>
  );
};

export default App;
