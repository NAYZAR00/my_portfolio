import { User, Terminal, Database, Cpu, CheckCircle } from "lucide-react";
import portfolioData from "../data/portfolioData";

function About() {
  const { developer } = portfolioData;

  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <div className="section-badge">
          <User size={14} /> About Me
        </div>
        <h2>
          Engineering With <span className="gradient-text">Purpose</span>
        </h2>
        <p className="section-subtitle">
          Passionate about building robust web applications from database schemas to responsive interfaces.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card intro-card">
          <h3>Full-Stack MERN Developer</h3>
          <p>{developer.bio}</p>
          <p>
            Whether designing RESTful API endpoints in Express, structuring MongoDB models, or crafting smooth React client experiences, I focus on clean code, security best practices, and performant user experiences.
          </p>

          <div className="about-pillars">
            <div className="pillar">
              <span className="pillar-icon"><Terminal size={18} /></span>
              <div>
                <h4>Modern Architecture</h4>
                <p>Modular codebases, decoupled client & server, and reusable components.</p>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-icon"><Database size={18} /></span>
              <div>
                <h4>Robust Data Flow</h4>
                <p>Secure authentication, structured schemas, validation, and predictable state.</p>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-icon"><Cpu size={18} /></span>
              <div>
                <h4>Production Ready</h4>
                <p>Deployed on scalable platforms like Vercel and Render with zero-downtime workflows.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stats-card">
          <div className="stat-item">
            <span className="stat-number">MERN</span>
            <span className="stat-label">Core Specialization</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Responsive & Accessible</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">REST</span>
            <span className="stat-label">API Architecture</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Full-Stack</span>
            <span className="stat-label">Vercel & Render Deployed</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
