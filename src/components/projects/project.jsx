import React from "react";
import "./project.css";
import Project_data from "./data";
import Card from "./card.jsx";

const Project = () =>{
    return(
        <>
            <section id="project">
                <div className="project-parent">
                    <h2 className="project-heading">My Portfolio</h2>

                    <div className="project-grid">
                        <div className="project-card">
                            <h2 className="title">Weather App</h2>
                            <a href="#home">Go To Project</a>
                            <p className="project-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero, omnis tempora numquam laudantium facere voluptatibus atque maiores veniam aspernatur soluta repellat nihil qui labore!
                            </p>
                        </div>
                        <div className="project-card">
                            <h2 className="title">ToDo- ReactJs</h2>
                            <a href="#home">Go To Project</a>
                            <p className="project-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero, omnis tempora numquam laudantium facere voluptatibus atque maiores veniam aspernatur soluta repellat nihil qui labore!
                            </p>
                        </div>
                        <div className="project-card">
                            <h2 className="title">Grow Your Farms</h2>
                            <a href="#home">Go To Project</a>
                            <p className="project-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero, omnis tempora numquam laudantium facere voluptatibus atque maiores veniam aspernatur soluta repellat nihil qui labore!
                            </p>
                        </div>
                        <div className="project-card">
                            <h2 className="title">personal Portfolio</h2>
                            <a href="#home">Go To Project</a>
                            <p className="project-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero, omnis tempora numquam laudantium facere voluptatibus atque maiores veniam aspernatur soluta repellat nihil qui labore!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;