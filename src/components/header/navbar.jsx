import React from "react";
import "./navbar.css";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import logo from "./../../assets/lpu.png";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_bar");
    }

    const Header = () =>{
        window.addEventListener("scroll", function () {
            const header = this.document.querySelector(".header")
            header.classList.toggle("active", window.screenY > 100)
        })
    }

    return(
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h2>Lovely Professional University</h2>
                </div>
                <nav ref={navRef}>
                    <a href="#home">Home</a>
                    <a href="#academics">Academics</a>
                    <a href="#skills">Skills</a>
                    <a href="#project">Projects</a>
                    <a href="#home">About</a>
                    <a href="#home">Contact</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn nav-open-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
                {Header}
            </header>
        </>
    )
}

export default Navbar;