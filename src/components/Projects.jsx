import { ExternalLink, Globe, Server, CheckCircle2, Sparkles, Github, FolderGit2, BookOpen } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Projects() {
  const { projects } = portfolioData;
  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} /> Featured Work
        </div>
        <h2>
          Curated <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Full-stack web applications, academic management systems, and open-source repositories.
        </p>
      </div>

      <div className="projects-grid">
        {featuredProject && (
          <article className="project-card featured-project-card">
            <div className="project-image-container">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-image-link"
                aria-label={`View live demo of ${featuredProject.title}`}
              >
                <img
                  src={featuredProject.image}
                  alt={`${featuredProject.title} Preview`}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay">
                  <span className="overlay-badge">
                    <ExternalLink size={16} /> Open Live Site
                  </span>
                </div>
              </a>
              <div className="featured-badge">
                <span className="status-dot" /> Live Production App
              </div>
            </div>

            <div className="project-details">
              <div className="project-meta">
                <span className="project-tagline">{featuredProject.tagline}</span>
              </div>

              <h3 className="project-title">
                <a href={featuredProject.liveUrl} target="_blank" rel="noreferrer">
                  {featuredProject.title}
                </a>
              </h3>

              <p className="project-desc">{featuredProject.description}</p>

              {featuredProject.highlights && featuredProject.highlights.length > 0 && (
                <div className="project-highlights">
                  <span className="highlights-title">Key Architectural Highlights:</span>
                  <ul>
                    {featuredProject.highlights.map((item, index) => (
                      <li key={index}>
                        <CheckCircle2 size={15} className="highlight-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-tech-tags">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button project-btn"
                  >
                    <Globe size={16} /> Live Demo <ExternalLink size={15} />
                  </a>
                )}
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button project-btn"
                  >
                    <Github size={16} /> GitHub Repo
                  </a>
                )}
                {featuredProject.backendUrl && (
                  <a
                    href={featuredProject.backendUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button project-btn"
                  >
                    <Server size={16} /> Backend API
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        {otherProjects.length > 0 && (
          <div className="other-projects-section">
            <h3 className="other-projects-heading">
              <FolderGit2 size={20} /> Academic & Portfolio Projects
            </h3>
            <div className="secondary-projects-grid">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className={`secondary-project-card ${project.cvProject ? "highlighted-card" : ""}`}
                >
                  <div className="secondary-project-header">
                    <div className="header-meta-group">
                      {project.cvProject && (
                        <span className="cv-project-pill">
                          <BookOpen size={12} /> CV Project
                        </span>
                      )}
                      <span className="project-tagline">{project.tagline}</span>
                    </div>
                    <div className="secondary-header-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="card-header-link"
                          aria-label={`Open ${project.title} live demo`}
                          title="Open Live Demo"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="card-header-link"
                          aria-label="View GitHub Repository"
                          title="View GitHub Repository"
                        >
                          <Github size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4>
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title}
                    </a>
                  </h4>
                  <p className="project-desc">{project.description}</p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="secondary-project-highlights">
                      {project.highlights.map((item, index) => (
                        <li key={index}>
                          <CheckCircle2 size={13} className="highlight-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="project-tech-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="primary-button project-btn"
                      >
                        <Globe size={15} /> Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-button project-btn"
                      >
                        <Github size={15} /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
