import { Github, Linkedin, ArrowDown, Download, Code2 } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Hero() {
  const { developer } = portfolioData;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          {developer.availability}
        </div>

        <p className="hero-greeting">{developer.greeting}</p>
        <h1>
          {developer.name}
          <span className="gradient-text">.</span>
        </h1>

        <p className="hero-description">
          Full-Stack MERN Developer building modern, responsive web applications
          with React, Node.js, Express, and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View Featured Projects <ArrowDown size={18} />
          </a>
          <a href={developer.cvUrl} className="secondary-button" download>
            Download CV <Download size={18} />
          </a>
        </div>

        <div className="hero-socials">
          <a
            href={developer.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <Github size={21} />
          </a>
          <a
            href={developer.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <Linkedin size={21} />
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Developer code illustration">
        <div className="floating-tag tag-top"><Code2 size={15} /> MERN STACK</div>
        <div className="code-card">
          <div className="code-header">
            <span /><span /><span />
            <p>developer.js</p>
          </div>
          <div className="code-content">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p>  name: <span className="code-green">"{developer.name}"</span>,</p>
            <p>  github: <span className="code-green">"{developer.githubHandle}"</span>,</p>
            <p>  role: <span className="code-green">"Full-Stack MERN"</span>,</p>
            <p>  featuredProject: <span className="code-green">"Media World"</span>,</p>
            <p>  stack: [</p>
            <p>    <span className="code-orange">"MongoDB"</span>,</p>
            <p>    <span className="code-orange">"Express.js"</span>,</p>
            <p>    <span className="code-orange">"React.js"</span>,</p>
            <p>    <span className="code-orange">"Node.js"</span></p>
            <p>  ],</p>
            <p>  status: <span className="code-green">"Open to opportunities"</span></p>
            <p>{"}"};</p>
          </div>
          <div className="code-footer">
            <span className="status-dot" />
            Live production apps & GitHub repositories
          </div>
        </div>
        <div className="floating-tag tag-bottom">{"{ }"} Clean code, real solutions</div>
      </div>
    </section>
  );
}

export default Hero;
