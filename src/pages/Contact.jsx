import ContactForm from "../components/ContactForm.jsx";
import profile from "../data/profile";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {

  return (

    <section className="contact-section">

      <div className="contact-title">

        <h1>Get In Touch</h1>

        <p>

          I'm always interested in learning, collaborating, and building exciting projects.

        </p>

      </div>

      <div className="contact-grid">

        <div className="contact-card">

          <h2>Contact Information</h2>

          <div className="contact-item">

            <FaEnvelope />

            <span>{profile.email}</span>

          </div>

          <div className="contact-item">

            <FaMapMarkerAlt />

            <span>{profile.location}</span>

          </div>

          <div className="social-links">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub />

            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin />

            </a>

          </div>

        </div>

        <ContactForm />

      </div>

    </section>

  );

}

export default Contact;