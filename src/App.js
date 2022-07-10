import React from "react";
import "./App.css";
import Navbar from "./components/header/navbar.jsx";
import Home from "./components/home/home.jsx";
import Academics from "./components/academics/academics.jsx";
import Skills from "./components/skills/skills.jsx";
import Project from "./components/projects/project";

function App() {
  return(
    <>
      <Navbar />
      <Home />
      <Academics />
      <Skills />
      <Project />
    </>
  )
}
 
export default App;