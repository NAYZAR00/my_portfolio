import {
  User,
  Terminal,
  Database,
  Cpu,
  Briefcase,
} from "lucide-react";
import portfolioData from "../data/portfolioData";

function About() {
  const { developer, additionalInfo } = portfolioData;

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
          Information Technology student with practical full-stack development experience.
        </p>
      </div>

      <div className="about-grid about-grid-single">
        <div className="about-card intro-card">
          <div className="intro-badge">
            <Briefcase size={14} /> Target: {additionalInfo.internshipTarget}
          </div>
          <h3>Full-Stack Developer</h3>
          <p>{developer.bio}</p>
          <p>
            Familiar with developing modular REST APIs in Node.js &amp; Express, connecting MongoDB
            databases using Mongoose schemas, and creating responsive React interfaces with
            predictable state management and clean component architecture.
          </p>

          <div className="about-pillars">
            <div className="pillar">
              <span className="pillar-icon">
                <Terminal size={18} />
              </span>
              <div>
                <h4>MVC Architecture &amp; Clean Code</h4>
                <p>
                  Organizing scalable backend code with separated controllers, models, and routes
                  following MVC design patterns.
                </p>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-icon">
                <Database size={18} />
              </span>
              <div>
                <h4>Full CRUD &amp; Database Integration</h4>
                <p>
                  Connecting MongoDB and MySQL databases, handling schema validation with Mongoose,
                  and designing robust RESTful APIs.
                </p>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-icon">
                <Cpu size={18} />
              </span>
              <div>
                <h4>Frontend &amp; Backend Integration</h4>
                <p>
                  Connecting client-side React applications to backend services with seamless data
                  flow, authentication, and error handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
