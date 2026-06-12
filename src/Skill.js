import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";

function Skill() {
  const skills = [
    {
      name: "HTML",
      value: 92,
      icon: <FaHtml5 />,
      color: "#E44D26",
    },
    {
      name: "CSS",
      value: 88,
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      value: 84,
      icon: <FaJs />,
      color: "#F7DF1E",
    },
    {
      name: "React",
      value: 80,
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "Bootstrap",
      value: 76,
      icon: <FaBootstrap />,
      color: "#7952B3",
    },
    {
      name: "Git / GitHub",
      value: 82,
      icon: <FaGithub />,
      color: "#FFFFFF",
    },
    {
      name: "Responsive Design",
      value: 90,
      icon: <FaMobileAlt />,
      color: "#22D3EE",
    },
  ];

  const [fillWidths, setFillWidths] = useState(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setFillWidths(skills.map((skill) => skill.value));
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skill" className="skills-section">
      <div className="skills-header">
        <div>
          <p className="skills-eyebrow">Technologies I Use</p>
          <h2 className="skills-title">My Skills</h2>
        </div>
      </div>

      <div className="skills-grid">
        <div className="skills-card-panel">
          {skills.map((skill, index) => (
            <article key={skill.name} className="skill-card">
              <div
                className="skill-card-icon"
                style={{ boxShadow: `0 0 30px ${skill.color}33` }}
              >
                {skill.icon}
              </div>
              <div className="skill-card-info">
                <h3>{skill.name}</h3>
                <div className="skill-progress">
                  <div className="skill-progress-track">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${fillWidths[index]}%`, background: `linear-gradient(135deg, ${skill.color}, #7c3aed)` }}
                    ></div>
                  </div>
                  <span className="skill-value">{skill.value}%</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="skills-background">
        <span className="skills-glow skills-glow-blue" />
        <span className="skills-glow skills-glow-purple" />
        <span className="skills-glow skills-glow-soft" />
      </div>
    </section>
  );
}

export default Skill;