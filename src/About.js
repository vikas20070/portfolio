import web from "./web.png"; 
import Ui from "./Ui.png"; 
import react from "./react.png"; 
import frontend from "./frontend.png"; 
import education from "./education.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; 
function About() {
    return(
        <div  id="about"  className="main1">
            <div className="image">
            <div className="men"></div>
            <div className="icon">
         <FaFacebook size={30} />
         <FaInstagram size={30} />
        <FaTwitter size={30} />
            </div>
            <div className="button">
                <button className="btn3"><a href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a></button>
                
            </div>
            </div>
            <div className="con1">
             <div>
              <h2>About Me</h2>
              <hr/>
              <p>I'm Vikas Patidar, a passionate Frontend Developer who loves
                creating<br /> modern and responsive websites. I enjoy turning ideas
                  into beautiful and <br />functional user interfaces.</p>
              <p>My main focus is building clean UI using HTML, CSS,
                 JavaScript and React.</p>
             </div>
            <hr/>
              <div className="mainbox">
                <div className="box">
                    <img src={web} alt="web"/>
                    <h3>Web Development</h3>
                </div>
                <div className="box">
                    <img src={Ui} alt="Ui"/>
                    <h3>UI/UX</h3>
                </div>
                <div className="box">
                    <img src={react} alt="react"/>
                    <h3>React Specailist</h3>
                </div> 
              </div>
               <h3>Education & Experience</h3>
               <div className="edu">
                 <div className="box1">
                    <div className="log"><img src={frontend} alt="frontend"/></div>
                    <div className="info">
                        <p>Fontende Developmen<br /> HTML,CSS,JAVA script React JS</p>
                    </div>
                 </div>
                 <div className="box1">
                    <div className="log"><img src={education} alt="education"/></div>
                    <div className="info">
                       <p>Degree : BCA <br />
                        Collage : SCSIT DAVV <br />
                        Passout : 2023 to 2026</p> 
                    </div>
                 </div>
               </div>
            </div>
        </div>
    )
}
export default About;