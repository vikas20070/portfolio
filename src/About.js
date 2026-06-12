import vikas from "./vikas.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaPaintBrush,
  FaReact,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-copy">
          <span className="about-eyebrow">ABOUT ME</span>
          <h2 className="about-title">
            Hi, I’m <span>Vikas Patidar</span>
          </h2>
          <p className="about-subtitle">
            Professional frontend developer building immersive, futuristic user
            experiences with clean, responsive code.
          </p>
          <p className="about-description">
            I specialize in modern frontend development using HTML, CSS,
            JavaScript and React to deliver polished interfaces, strong
            performance and high-impact visuals.
          </p>

          <div className="tech-pill-grid">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>

          <div className="social-row">
            <a href="https://linkedin.com" className="social-btn" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="social-btn" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://facebook.com" className="social-btn" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="social-btn" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="social-btn" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="about-image-panel">
          <div className="image-card">
            <div className="image-glow"></div>
            <div className="image-frame">
              <img src={vikas} alt="Vikas Patidar" />
            </div>
          </div>
        </div>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <div className="feature-icon">
            <FaLaptopCode />
          </div>
          <h3>Web Development</h3>
          <p>Custom responsive solutions with modern frontend architecture.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon feature-icon-secondary">
            <FaPaintBrush />
          </div>
          <h3>UI/UX Design</h3>
          <p>Futuristic visual systems with polished interactions and layouts.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon feature-icon-accent">
            <FaReact />
          </div>
          <h3>React Specialist</h3>
          <p>Component-driven development with React, hooks, and performance.</p>
        </article>
      </div>

      <div className="timeline-panel">
        <div className="timeline-card timeline-experience">
          <div className="timeline-header">
            <FaCode />
            <div>
              <h4>Frontend Development</h4>
              <span>2023 - Present</span>
            </div>
          </div>
          <p>
            Built modern websites and web apps using React, responsive design,
            and neon-inspired interfaces for premium frontend experiences.
          </p>
        </div>

        <div className="timeline-card timeline-education">
          <div className="timeline-header">
            <FaGraduationCap />
            <div>
              <h4>BCA Degree</h4>
              <span>SCSIT DAVV • 2023 - 2026</span>
            </div>
          </div>
          <p>
            Completed a strong foundation in software development, UI design,
            and frontend engineering with a focus on user-centered systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;