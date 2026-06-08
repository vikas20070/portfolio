import { FaHtml5, FaCss3Alt, FaJs} from "react-icons/fa";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
function Skill() {
    const skills = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 85 },
  { name: "JavaScript", value: 80 },
  { name: "React", value: 75 },
  { name: "WordPress", value: 70 },
  { name: "C++", value: 65 }
];
const leftSkills = skills.slice(0,3);
const rightSkills = skills.slice(3,6);
   return (
    <div id="skill" className="skill">
        <div className="row1">
          <div className="r1">
            <h3>My Professional <br />
                background skill and <br /> Accomplishment
            </h3>
          </div>
          <div className="r2">
            <p>I have experience in building modern <br />and responsive
              web applications using<br /> frontend technologies.</p>
          </div>
        </div>
        <div className="row2">
          <div className="icon-box">
            <FaHtml5 className="skill-icon" color="#E44D26" />
          </div>
          <div className="icon-box">
            <FaCss3Alt className="skill-icon" color="#1197f7" />
          </div>
          <div className="icon-box">
            <FaJs className="skill-icon" color="#F7DF1E" />
          </div>
          <div className="icon-box">
            <FaReact className="skill-icon" color="#02c5f5" />
          </div>
          <div className="icon-box">
            <FaWordpress className="skill-icon" color="#10668d" />
          </div>
          <div className="icon-box">
            <SiCplusplus className="skill-icon" color="#135688" />
          </div>
        </div>
        <div className="row3">
            <div className="r3">
            {leftSkills.map((item, index) => (
  <div key={index} className="skill-item">
    <p className="skill-label">
      {item.name} <span>{item.value}%</span>
    </p>
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: item.value + "%" }}></div>
    </div>
  </div>
))}
     </div>
            <div className="r3">
{rightSkills.map((item, index) => (
  <div key={index} className="skill-item">
    <p className="skill-label">
      {item.name} <span>{item.value}%</span>
    </p>
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: item.value + "%" }}></div>
    </div>
  </div>
))}
            </div>
        </div>
    </div>
   );
}
export default Skill;