import { Github, Linkedin, ArrowDown, Download, Code2, Briefcase } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Hero() {
  const { developer } = portfolioData;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">{developer.greeting}</p>
        <h1>
          {developer.name}
          <span className="gradient-text">.</span>
        </h1>

        <div className="hero-role-badge">
          <Briefcase size={15} />
          <span>{developer.title}</span>
        </div>

        <p className="hero-description">
          Information Technology student at Rangsit University with hands-on experience building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Experienced in developing responsive user interfaces, building RESTful APIs, and integrating databases. Eager to apply technical skills, contribute to real-world software development projects, and grow as a Junior Full-Stack Developer. Seeking an opportunity to start a professional career in full-stack development.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View Featured Projects <ArrowDown size={18} />
          </a>
          <a
            href={developer.cvUrl}
            className="secondary-button"
            download="Nay_Zar_Aung_CV.pdf"
            aria-label="Download Nay Zar Aung's CV"
          >
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
        <div className="floating-tag tag-top">
          <Code2 size={15} /> FULL-STACK DEVELOPER
        </div>
        <div className="code-card">
          <div className="code-header">
            <span />
            <span />
            <span />
            <p>developer.js</p>
          </div>
          <div className="code-content">
            <p><span className="code-purple">const</span> candidate = {"{"}</p>
            <p>  name: <span className="code-green">"{developer.name}"</span>,</p>

            <p>  degree: <span className="code-green">"Information Technology"</span>,</p>
            <p>  targetRole: <span className="code-green">"{developer.targetRole}"</span>,</p>

            <p>  coreStack: [</p>
            <p>    <span className="code-orange">"MongoDB"</span>,</p>
            <p>    <span className="code-orange">"Express.js"</span>,</p>
            <p>    <span className="code-orange">"React.js"</span>,</p>
            <p>    <span className="code-orange">"Node.js"</span></p>
            <p>  ],</p>

          </div>
          <div className="code-footer">
            <span className="status-dot" />
            Live production apps & GitHub repositories
          </div>
        </div>
        <div className="floating-tag tag-bottom">
          {"{ }"} CRUD & MVC Architecture
        </div>
      </div>
    </section>
  );
}

export default Hero;
