import hospital from "./hospital.png";
import portfolio from "./portfolio.png";
import web from "./web.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  const projects = [
    {
      title: "Life Care Hospital",
      description:
        "A premium healthcare landing page with modern UI, service cards, and patient-focused flows.",
      image: hospital,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Personal Portfolio",
      description:
        "A futuristic developer portfolio featuring glassmorphism, smooth motion, and responsive layout.",
      image: portfolio,
      tags: ["React", "CSS", "Responsive Design", "API"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Web App Dashboard",
      description:
        "A clean dashboard interface delivering analytics, charts, and interactive controls for users.",
      image: web,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "E-Commerce Store",
      description:
        "A modern store experience with product showcase, cart interactions, and responsive storefront design.",
      image: portfolio,
      tags: ["React", "Bootstrap", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Brand Landing Page",
      description:
        "A sharp brand landing page with hero visuals, feature highlights, and neon gradient styling.",
      image: hospital,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "API Showcase",
      description:
        "A developer tool interface showing API calls, endpoint detail cards, and clean status badges.",
      image: web,
      tags: ["React", "API", "CSS", "GitHub"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div>
          <p className="projects-eyebrow">Recent Work & Featured Projects</p>
          <h2 className="projects-title">My Projects</h2>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-media">
              <img src={project.image} alt={project.title} />
              <div className="project-card-overlay">
                <span>Explore Project</span>
              </div>
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  className="project-btn project-btn-live"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo <FaExternalLinkAlt />
                </a>
                <a
                  className="project-btn project-btn-code"
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-glow-layer">
        <span className="projects-glow projects-glow-1" />
        <span className="projects-glow projects-glow-2" />
        <span className="projects-glow projects-glow-3" />
      </div>
    </section>
  );
}

export default Project;