import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
function Contact() {
    const form = useRef();

    useEffect(() => {
        emailjs.init("hEAXZt9zzEtoawHFj");
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_m5f0vo4",
            "template_e5r0w7q",
            form.current
        )
        .then(() => {
            alert("Message sent successfully!");
            form.current.reset();
        })
        .catch(() => {
            alert("Message failed to send. Please try again.");
        });
    };
    return(
     <div  id="contact" className="contact">
        <div className="inf">
            <div className="Get">Let's <br /> get in  Touch</div>
            <div className="office"> Our Information</div>
            <div className="squre">
                <div className="touch">
                    <div className="email"> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vikaspatidar828@email.com" target="_blank" rel="noreferrer"><MdEmail size={40} color="#EA4335"className="c-icon" /></a>  </div>
                     <div className="mesg">vikaspatidar828<br />&nbsp;&nbsp;@gamil.com</div>
                </div>
                <div className="touch">
                     <div className="email"><a href="tel:+918109836169"><FaPhoneAlt size={30} color="#34B7F1"className="c-icon" /> </a></div>
                     <div className="mesg">+918109836169</div>
                </div>
                <div className="touch">
                     <div className="email"><a href="https://wa.me/91"><FaWhatsapp size={40} color="#25D366"  className="c-icon"/></a></div>
                     <div className="mesg">+91810983619</div>
                </div>
    
                <div className="touch">
                      <div className="email"> <a href="https://maps.app.goo.gl/cKe5YANhtosFYzJM7" target="_blank" rel="noreferrer"><MdLocationOn size={40} color="#FF4C4C" className="c-icon"/> </a> </div>
                     <div className="mesg"> 189 bigali nagar <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;indore</div>
                </div>
                <div className="touch">
                     <div className="email"> <a href="https://www.linkedin.com/in/vikas-patidar/" target="_blank" rel="noreferrer"><FaLinkedin size={40} color="#0077B5" className="c-icon" /> </a></div>
                     <div className="mesg">Vikas patidar</div>
                </div>
                <div className="touch">
                     <div className="email"><a href="https://www.instagram.com/vikkypatidarr/"><FaInstagram size={40} color="#E4405F"className="c-icon" /></a> </div>
                     <div className="mesg">@vikkypatidarr</div>
                </div>
            </div>
        </div>
         <div className="form">
            <div className="input">
                <form ref={form} className="contact-form" onSubmit={sendEmail}>

  <input type="text" name="name" placeholder="Your Name" required /> <br />

  <input type="email" name="email" placeholder="Your Email" required />  <br />

  <input type="tel" name="phone" placeholder="Your Phone Number" required />  <br />

  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>  <br />

  <button type="submit">Send Message</button>

</form>
            </div>
         </div>
     </div>
    );
}
export default Contact;