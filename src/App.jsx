import React from "react";
import Navbar from "./components/Navbar/header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Project from "./components/Projects/Project"

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
    </div>
    
    
  );
}

export default App;
