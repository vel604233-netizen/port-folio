import {

FaGithub,

FaLinkedin,

FaEnvelope

} from "react-icons/fa";

import profile from "../data/profile";

import "../styles/Footer.css";

function Footer(){

return(

<footer className="footer">

<h2>

Sakthivel V

</h2>

<p>

Full Stack Developer

</p>

<div className="footer-icons">

<a

href={profile.github}

target="_blank"

rel="noreferrer"

>

<FaGithub/>

</a>

<a

href={profile.linkedin}

target="_blank"

rel="noreferrer"

>

<FaLinkedin/>

</a>

<a

href={`mailto:${profile.email}`}

>

<FaEnvelope/>

</a>

</div>

<p>

© 2026 Sakthivel V.

All Rights Reserved.

</p>

</footer>

);

}

export default Footer;