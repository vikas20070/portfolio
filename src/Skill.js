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
            <FaHtml5 size={90} color="#E44D26" style={{
             
              }} />
          </div>
              <div className="icon-box">
            <FaCss3Alt size={90} color="#1197f7" style={{
             
              }} />
              </div >
              <div className="icon-box">
            <FaJs size={90} color="#F7DF1E" style={{
                 
              }} />
              </div>
              <div className="icon-box">
            <FaReact size={90} color="#02c5f5" style={{
              
              }} />
              </div>
              <div className="icon-box">
           <FaWordpress size={90} color="#10668d" style={{
             
              }} />
              </div>
              <div className="icon-box">
           <SiCplusplus size={90} color="#135688" style={{
              }} />
              </div>
        </div>
        <div className="row3">
            <div className="r3">
            {leftSkills.map((item, index) => (
  <div key={index} style={{ marginBottom: "15px" }}>

    <p style={{ display:"flex", justifyContent:"space-between", color:"white" }}>
      {item.name} <span>{item.value}%</span>
    </p>

    <div style={{
      background:"#d5d9e1",
      height:"8px",
      width:"420px",
      borderRadius:"5px"
    }}>
      <div style={{
        width: item.value + "%",
        background:"#38bdf8",
        height:"100%",
        borderRadius:"5px"
      }}></div>
    </div>

  </div>
))}
     </div>
            <div className="r3">
{rightSkills.map((item, index) => (
  <div key={index} style={{ marginBottom: "15px" }}>

    <p style={{ display:"flex", justifyContent:"space-between", color:"white" }}>
      {item.name} <span>{item.value}%</span>
    </p>

    <div style={{ background:"#d7dde7",  width:"420px",height:"8px", borderRadius:"5px" }}>
      <div style={{
        width: item.value + "%",
        background:"#38bdf8",
        height:"100%",
        borderRadius:"5px"
      }}></div>
    </div>

  </div>
))}
            </div>
        </div>
    </div>
   );
}
export default Skill;