import React from "react";
import "./skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import html from "./../../assets/html.png";
import css from "./../../assets/css.png";
import js from "./../../assets/js.png";
import react from "./../../assets/react.png";
import node from "./../../assets/node.png";
import express from "./../../assets/express.png";
import mongo from "./../../assets/mongo.png";
import unity from "./../../assets/unity.png";
import figma from "./../../assets/figma.png";
import maya from "./../../assets/maya.png";

function Skills() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: true,
        swipeToSlide: true,
        adaptiveHeight: true
    };

    return(
        <>      
        <section id="skills">
                <div className="skills-parent">
                    <h2 className="skills-heading">Skills I Own</h2>
                    <div className="skills-container">
                        <Slider {...settings}>
                            <div className="card">
                                <img src={html} alt="html"></img>
                            </div>
                            <div className="card">
                                <img src={css} alt="css"></img>
                            </div>
                            <div className="card">
                                <img src={js} alt="javascript"></img>
                            </div>
                            <div className="card">
                                <img src={react} alt="react Js"></img>
                            </div>
                            <div className="card">
                                <img src={node} alt="node"></img>
                            </div>
                            <div className="card">
                                <img src={express} alt="express"></img>
                            </div>
                            <div className="card">
                                <img src={mongo} alt="Mongo"></img>
                            </div>
                            <div className="card">
                                <img src={unity} alt="unity"></img>
                            </div>
                            <div className="card">
                                <img src={figma} alt="figma"></img>
                            </div>
                            <div className="card">
                                <img src={maya} alt="maya"></img>
                            </div>
                        </Slider>
                    </div>
                </div>
                </section>
        </>
    )
}

export default Skills;