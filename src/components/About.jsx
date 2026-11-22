import {
  User,
  Terminal,
  Database,
  Cpu,
  GraduationCap,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  Globe
} from "lucide-react";
import portfolioData from "../data/portfolioData";

function About() {
  const { developer, education, additionalInfo } = portfolioData;

  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <div className="section-badge">
          <User size={14} /> About Me & Qualifications
        </div>
        <h2>
          Engineering With <span className="gradient-text">Purpose</span>
        </h2>
        <p className="section-subtitle">
          Information Technology student with practical full-stack development experience.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card intro-card">
          <div className="intro-badge">
            <Briefcase size={14} /> Target: {additionalInfo.internshipTarget}
          </div>
          <h3>Full-Stack MERN Developer</h3>
          <p>{developer.bio}</p>
          <p>
            Familiar with developing modular REST APIs in Node.js & Express, connecting MongoDB
            databases using Mongoose schemas, and creating responsive React interfaces with
            predictable state management and clean component architecture.
          </p>

          <div className="about-pillars">
            <div className="pillar">
              <span className="pillar-icon">
                <Terminal size={18} />
              </span>
              <div>
                <h4>MVC Architecture & Clean Code</h4>
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
                <h4>Full CRUD & Database Integration</h4>
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
                <h4>Frontend & Backend Integration</h4>
                <p>
                  Connecting client-side React applications to backend services with seamless data
                  flow, authentication, and error handling.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-sidebar">
          {/* Education Card */}
          <div className="about-card education-card">
            <div className="card-badge">
              <GraduationCap size={16} /> Education
            </div>
            <h4 className="edu-institution">{education.institution}</h4>
            <div className="edu-meta">
              <span className="edu-location">
                <MapPin size={13} /> {education.country}
              </span>
            </div>
            <p className="edu-degree">{education.degree}</p>
            <div className="edu-date">
              <Calendar size={14} />
              <span>{education.status}</span>
            </div>
            <p className="edu-description">{education.description}</p>
          </div>

          {/* Internship Profile & Additional Info Card */}
          <div className="about-card candidate-info-card">
            <div className="card-badge">
              <Award size={16} /> Internship Profile
            </div>
            <div className="info-row">
              <span className="info-label">Internship Target:</span>
              <span className="info-value highlight">{additionalInfo.internshipTarget}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Availability:</span>
              <span className="info-value">{additionalInfo.availability}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Work Arrangement:</span>
              <span className="info-value badge-pill">{additionalInfo.preferredArrangement}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Nationality:</span>
              <span className="info-value">{additionalInfo.nationality}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Languages:</span>
              <div className="lang-tags">
                {additionalInfo.languages.map((l) => (
                  <span key={l.name} className="lang-tag">
                    <Globe size={11} /> {l.name}: {l.level}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-stats-container">
        <div className="about-stats-card">
          <div className="stat-item">
            <span className="stat-number">RSU</span>
            <span className="stat-label">Rangsit University (Thailand)</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4 Months</span>
            <span className="stat-label">Internship Availability</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">MERN</span>
            <span className="stat-label">Core Technical Stack</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Remote</span>
            <span className="stat-label">Preferred Arrangement</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
