import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";

import "../styles/Navbar.css";

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="navbar">

      <h2 className="logo">

        Sakthivel V

      </h2>

      <nav className={menuOpen ? "nav active" : "nav"}>

        <Link onClick={()=>setMenuOpen(false)} to="/">Home</Link>

        <Link onClick={()=>setMenuOpen(false)} to="/about">About</Link>

        <Link onClick={()=>setMenuOpen(false)} to="/skills">Skills</Link>

        <Link onClick={()=>setMenuOpen(false)} to="/projects">Projects</Link>

        <Link onClick={()=>setMenuOpen(false)} to="/contact">Contact</Link>

      </nav>

      <div className="rightSection">

        <ThemeToggle

          darkMode={darkMode}

          setDarkMode={setDarkMode}

        />

        <button

          className="menuButton"

          onClick={()=>setMenuOpen(!menuOpen)}

        >

          {

            menuOpen ?

            <FaTimes />

            :

            <FaBars />

          }

        </button>

      </div>

    </header>

  );

}

export default Navbar;