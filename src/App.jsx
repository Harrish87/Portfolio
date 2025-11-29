import React, { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import "./assets/css/index.css";
import Experience from "./pages/Certification/Certification";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  useEffect(() => {
    // Optional: Configure Lenis options
    const lenisOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    };
  }, []);

  return (
    <ReactLenis root>
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Experience />} /> 
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      
      )}
    </ReactLenis>
  );
}
