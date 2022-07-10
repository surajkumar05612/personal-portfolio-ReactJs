import React from "react";
import "./App.css";
import Navbar from "./components/header/navbar.jsx";
import Home from "./components/home/home.jsx";
import Academics from "./components/academics/academics.jsx";

function App() {
  return(
    <>
      <Navbar />
      <Home />
      <Academics />
    </>
  )
}
 
export default App;