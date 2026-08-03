import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

import "./styles/App.css";

function App() {

  const [darkMode,setDarkMode]=useState(()=>{

    return localStorage.getItem("theme")==="dark";

  });

  const [loading,setLoading]=useState(true);

  useEffect(()=>{

    const timer=setTimeout(()=>{

      setLoading(false);

    },1200);

    return ()=>clearTimeout(timer);

  },[]);

  useEffect(()=>{

    if(darkMode){

      document.body.classList.add("dark");

      localStorage.setItem("theme","dark");

    }

    else{

      document.body.classList.remove("dark");

      localStorage.setItem("theme","light");

    }

  },[darkMode]);

  if(loading){

    return <LoadingSpinner/>;

  }

  return(

    <>

    <ScrollToTop/>

    <Navbar

      darkMode={darkMode}

      setDarkMode={setDarkMode}

    />

    <main>

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/skills" element={<Skills/>}/>

        <Route path="/projects" element={<Projects/>}/>

        <Route path="/contact" element={<Contact/>}/>

      </Routes>

    </main>

    

    <Footer/>

    </>

  );

}

export default App;