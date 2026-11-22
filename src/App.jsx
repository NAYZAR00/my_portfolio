import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import portfolioData from "./data/portfolioData";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const { developer } = portfolioData;

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app theme-${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>
          Designed & built with React + Vite. © {new Date().getFullYear()} {developer.title} Portfolio.
        </p>
      </footer>
    </div>
  );
}

export default App;
