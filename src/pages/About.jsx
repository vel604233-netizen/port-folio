import profile from "../data/profile.js";
import {
  FaUserGraduate,
  FaBullseye,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

import "../styles/About.css";

function About() {
  return (
    <section className="about-section">

      <div className="about-title">

        <h1>About Me</h1>

        <p>
          Passionate about building responsive and modern web applications
          using today's technologies.
        </p>

      </div>

      <div className="about-grid">

        {/* Personal Card */}

        <div className="about-card">

          <FaLaptopCode className="cardIcon" />

          <h2>Personal Information</h2>

          <div className="infoRow">

            <strong>Name</strong>

            <span>{profile.name}</span>

          </div>

          <div className="infoRow">

            <strong>Role</strong>

            <span>{profile.role}</span>

          </div>

          <div className="infoRow">

            <strong>Email</strong>

            <span>{profile.email}</span>

          </div>

          <div className="infoRow">

            <strong>Location</strong>

            <span>{profile.location}</span>

          </div>

        </div>

        {/* Education */}

        <div className="about-card">

          <FaUserGraduate className="cardIcon" />

          <h2>Education</h2>

          <div className="timeline">

            <div className="timeline-item">

              <h3>

                {profile.degree}

              </h3>

              <h4>

                {profile.department}

              </h4>

              <p>

                {profile.college}

              </p>

              <span>

                {profile.batch}

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Career Objective */}

      <div className="objective">

        <FaBullseye className="cardIcon" />

        <h2>Career Objective</h2>

        <p>

          {profile.careerObjective}

        </p>

      </div>

      {/* Quick Contact */}

      <div className="quick-contact">

        <div>

          <FaEnvelope />

          <span>{profile.email}</span>

        </div>

        <div>

          <FaMapMarkerAlt />

          <span>{profile.location}</span>

        </div>

      </div>

    </section>
  );
}

export default About;