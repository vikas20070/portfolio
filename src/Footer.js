import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* left */}
        <div className="footer-box">
    
            <h1><span>Vikas</span> Patidar</h1>

            <h3>Frontend Developer</h3>

          <p>
            I build modern, responsive and user friendly websites
            with clean code and creative design.
          </p>

          <div className="line"></div>

          <div className="social-icons">

            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://github.com/" target="_blank">
              <FaGithub />
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* quick links */}
        <div className="footer-box">
          <h2>Quick Links</h2>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* services */}
        <div className="footer-box">
          <h2>Services</h2>

          <ul>
            <li>Frontend Development</li>
            <li>React Development</li>
            <li>WordPress Development</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        {/* contact */}
        <div className="footer-box1">
          <h2>Contact Info</h2>

          <p><FaMapMarkerAlt /> Indore, Madhya Pradesh</p>

          <p><FaPhoneAlt /> +91 8109836169</p>

          <p><FaEnvelope /> vikaspatidar828@gmail.com</p>

          <p><FaGlobe /> www.vikaspatidar.dev</p>
        </div>

      </div>

      <div className="bottom-footer">

        <h2>💙</h2>

        <p>
          © 2026 <span>Vikas Patidar</span>. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;