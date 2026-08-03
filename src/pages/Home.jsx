import profile from "../data/profile.js";
import profileImage from "../assets/images/profile.jpg";

import TypingText from "../components/TypingText.jsx";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope
} from "react-icons/fa";

import "../styles/Home.css";

function Home() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="welcome">
          👋 Welcome To My Portfolio
        </p>

        <h1>

          Hi,

          <br />

          I'm

          <span> {profile.name}</span>

        </h1>

        <TypingText />

        <p className="intro">

          {profile.intro}

        </p>

        <div className="hero-buttons">

          <a

            href={profile.resume}

            download

            className="primaryBtn"

          >

            <FaDownload />

            Resume

          </a>

          <a

            href={profile.github}

            target="_blank"

            rel="noreferrer"

            className="secondaryBtn"

          >

            <FaGithub />

            GitHub

          </a>

          <a

            href={profile.linkedin}

            target="_blank"

            rel="noreferrer"

            className="secondaryBtn"

          >

            <FaLinkedin />

            LinkedIn

          </a>

        </div>

        <div className="socials">

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

          <a

            href={`mailto:${profile.email}`}

          >

            <FaEnvelope />

          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="imageBox">

          <img

            src={profileImage}

            alt={profile.name}

          />

        </div>

      </div>

    </section>
  );
}

export default Home;