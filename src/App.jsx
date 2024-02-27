import "./App.scss";
import Navbar from "./components/nav/navbar";
import About from "./components/home/about";
import Skills from "./components/skills/skills";

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
      <section
        id="Projects"
        style={{ height: "100vh", background: "rebeccapurple" }}
      >
        Project
      </section>
      <section
        id="Experience"
        style={{ height: "100vh", background: "yellow" }}
      >
        Work Experience
      </section>
      <section id="Contact" style={{ height: "100vh", background: "green" }}>
        Contact us
      </section>
    </div>
  );
};

export default App;
