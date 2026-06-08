
import { FaHtml5, FaCss3Alt, FaJs, FaReact,  } from "react-icons/fa";
import vikas from "./vikas.png";

function Home() {
  return (
    <div id="home" className="main">
      {/* Left Content Section */}
      <div className="con">
        <div className="greeting">Hi, I'm Vikas 👋</div>
        <h2 className="hero-heading">
          <span className="gradient-text">Front-End</span>
          <br />
          <span className="gradient-text highlight">Developer</span>
        </h2>
        
        <p className="hero-description">
          A passionate Frontend Developer crafting beautiful, responsive, and user-friendly web experiences. 
          I specialize in modern technologies including <span className="tech-highlight">HTML, CSS, JavaScript, React, and WordPress</span>.
        </p>
        
        {/* CTA Buttons */}
        <div className="button-group">
          <button className="btn-primary">
            <a href="#contact">Hire Me</a>
          </button>
          <button className="btn-secondary">
            <a href="#projects">View Projects</a>
          </button>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">1+</div>
            <div className="stat-label">Years<br />Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects<br />Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Happy<br />Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client<br />Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Right Content Section - Image with Neon Ring and Floating Tech Icons */}
      <div className="image-section">
        {/* Neon Ring Background */}
        <div className="neon-ring"></div>
        
        {/* Profile Image */}
        <div className="profile-image">
          <img src={vikas} alt="Vikas" />
        </div>

        {/* Floating Tech Cards */}
        <div className="floating-tech-card card-html">
          <FaHtml5 size={32} />
          <span>HTML</span>
        </div>
        <div className="floating-tech-card card-css">
          <FaCss3Alt size={32} />
          <span>CSS</span>
        </div>
        <div className="floating-tech-card card-js">
          <FaJs size={32} />
          <span>JavaScript</span>
        </div>
        <div className="floating-tech-card card-react">
          <FaReact size={32} />
          <span>React</span>
        </div>
        {/* <div className="floating-tech-card card-code">
          <FaLaptopCode size={32} />
          <span>Coding</span>
        </div> */}
      </div>
    </div>
  );
}
export default Home;