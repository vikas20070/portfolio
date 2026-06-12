import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp, FaLinkedin, FaInstagram, FaUserAlt, FaRegFileAlt, FaRegCommentDots, FaPaperPlane } from "react-icons/fa";

const contactItems = [
  {
    title: "Email",
    detail: "vikaspatidar828@gmail.com",
    href: "mailto:vikaspatidar828@gmail.com",
    icon: MdEmail,
    color: "blue",
  },
  {
    title: "Phone",
    detail: "+918109836169",
    href: "tel:+918109836169",
    icon: FaPhoneAlt,
    color: "blue",
  },
  {
    title: "WhatsApp",
    detail: "+918109836169",
    href: "https://wa.me/918109836169",
    icon: FaWhatsapp,
    color: "green",
  },
  {
    title: "Location",
    detail: "Indore, Madhya Pradesh, India",
    href: "https://maps.app.goo.gl/cKe5YANhtosFYzJM7",
    icon: MdLocationOn,
    color: "purple",
  },
  {
    title: "LinkedIn",
    detail: "linkedin.com/in/vikaspatidar",
    href: "https://www.linkedin.com/in/vikas-patidar/",
    icon: FaLinkedin,
    color: "blue",
  },
  {
    title: "Instagram",
    detail: "instagram.com/vikaspatidar15",
    href: "https://www.instagram.com/vikkypatidarr/",
    icon: FaInstagram,
    color: "pink",
  },
];

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    try {
      emailjs.init("hEAXZt9zzEtoawHFj");
    } catch (e) {
      console.error(e);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_m5f0vo4", "template_e5r0w7q", form.current)
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Message failed to send. Please try again.");
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        <span className="contact-eyebrow">CONTACT ME</span>
        <h2 className="contact-title">
          Let's Work <span className="gradient-text">Together</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind or want to discuss opportunities? I’d love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <div className="panel-header">
            <div>
              {/* <span className="panel-meta">Premium Contact</span> */}
              <h3>Get In Touch</h3>
            </div>
            {/* <span className="panel-accent" /> */}
          </div>
          <p className="panel-copy">
            {/* Feel free to reach out through any of the channels below. I’ll respond quickly with next steps. */}
          </p>

          <div className="contact-list">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  className={`contact-card contact-card-${item.color}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card-left">
                    <span className="card-icon">
                      <Icon />
                    </span>
                    <div>
                      <div className="card-title">{item.title}</div>
                      <div className="card-text">{item.detail}</div>
                    </div>
                  </div>
                  {/* <FaArrowRight className="card-arrow" /> */}
                </a>
              );
            })}
          </div>
        </div>

        <div className="contact-right">
          <div className="panel-header panel-header-right">
            <div>
              {/* <span className="panel-meta">Futuristic Form</span> */}
              <h3>Send a Message</h3>
            </div>
            {/* <span className="panel-accent panel-accent-right" /> */}
          </div>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-grid">
              <label className="input-box">
                <FaUserAlt className="input-icon" />
                <input type="text" name="name" placeholder="Full Name" required />
              </label>
              <label className="input-box">
                <MdEmail className="input-icon" />
                <input type="email" name="email" placeholder="Email Address" required />
              </label>
              <label className="input-box full-width">
                <FaPhoneAlt className="input-icon" />
                <input type="tel" name="phone" placeholder="Phone Number" />
              </label>
              <label className="input-box full-width">
                <FaRegFileAlt className="input-icon" />
                <input type="text" name="subject" placeholder="Subject" />
              </label>
              <label className="input-box textarea-box full-width">
                <FaRegCommentDots className="input-icon" />
                <textarea name="message" placeholder="Your Message" rows="6" required />
              </label>
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane className="button-icon" /> Send Message
            </button>
            <p className="form-note">🔒 Your information is safe with me. I’ll never spam you.</p>
          </form>
        </div>
      </div>

      <div className="contact-background">
        <span className="bg-circle bg-circle-1" />
        <span className="bg-circle bg-circle-2" />
        <span className="bg-circle bg-circle-3" />
        <span className="bg-grid" />
      </div>
    </section>
  );
}


