import { Sun, Moon, Github, Linkedin } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Navbar({ theme, toggleTheme }) {
  const { developer } = portfolioData;

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="#home" className="logo">
        <span className="logo-symbol">&lt;/&gt;</span>
        {developer.name || "DevPortfolio"}
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-actions">
        <a
          href={developer.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          title="GitHub Profile"
        >
          <Github size={19} />
        </a>
        <a
          href={developer.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <Linkedin size={19} />
        </a>
        <button
          className="theme-button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          type="button"
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
