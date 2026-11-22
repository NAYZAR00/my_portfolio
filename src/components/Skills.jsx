import { Code2, Server, Database, Layers, Wrench, CheckCircle } from "lucide-react";
import portfolioData from "../data/portfolioData";

function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend":
        return <Code2 size={20} />;
      case "Backend":
        return <Server size={20} />;
      case "Database":
        return <Database size={20} />;
      case "Tools":
        return <Wrench size={20} />;
      case "Concepts":
        return <Layers size={20} />;
      default:
        return <Layers size={20} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <div className="section-badge">
          <Layers size={14} /> Technical Stack
        </div>
        <h2>
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle">
          Core technical skills, databases, developer tools, and architecture concepts.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-category-card">
            <div className="skill-category-header">
              <div className="skill-cat-icon">{getCategoryIcon(group.category)}</div>
              <h3>{group.category}</h3>
            </div>
            <div className="skill-items-list">
              {group.items.map((skill) => (
                <div key={skill} className="skill-badge">
                  <CheckCircle size={14} className="badge-icon" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
