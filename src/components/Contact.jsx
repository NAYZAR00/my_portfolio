import { Mail, Send, Github, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Contact() {
  const { developer } = portfolioData;

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <div className="section-badge">
          <MessageSquare size={14} /> Get In Touch
        </div>
        <h2>
          Let's Build Something <span className="gradient-text">Great</span>
        </h2>
        <p className="section-subtitle">
          Interested in collaborating or discussing opportunities? Feel free to reach out.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-status">
            <span className="status-dot" />
            <span>{developer.availability}</span>
          </div>

          <h3>Start a Conversation</h3>
          <p>
            I am currently open to full-time roles, internships, and freelance projects. Whether you have a project in mind or want to talk tech, my inbox is open!
          </p>

          <div className="contact-links">
            <a
              href={developer.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link-item"
            >
              <div className="contact-link-icon">
                <Github size={20} />
              </div>
              <div className="contact-link-info">
                <span className="link-label">GitHub</span>
                <span className="link-value">{developer.githubHandle}</span>
              </div>
              <ArrowUpRight size={18} className="link-arrow" />
            </a>

            <a
              href={developer.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link-item"
            >
              <div className="contact-link-icon">
                <Linkedin size={20} />
              </div>
              <div className="contact-link-info">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">{developer.linkedinHandle || "Nay Zar Aung"}</span>
              </div>
              <ArrowUpRight size={18} className="link-arrow" />
            </a>

            <a
              href={`mailto:${developer.email}`}
              className="contact-link-item"
            >
              <div className="contact-link-icon">
                <Mail size={20} />
              </div>
              <div className="contact-link-info">
                <span className="link-label">Email</span>
                <span className="link-value">{developer.email}</span>
              </div>
              <ArrowUpRight size={18} className="link-arrow" />
            </a>
          </div>

          <div className="contact-action-bar">
            <a href={`mailto:${developer.email}`} className="primary-button">
              <Send size={16} /> Send Email
            </a>
            <a href={developer.cvUrl} className="secondary-button" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
