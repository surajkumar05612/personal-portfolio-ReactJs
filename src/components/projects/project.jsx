import React from "react";
import "./project.css";

const Project = () =>{
    return(
        <>
            <section id="project">
                <div className="project-parent">
                    <h2 className="project-heading">My Portfolio</h2>

                    <div className="project-grid">
                        <div className="project-card">
                            <h2 className="title">Weather App</h2>
                            <a href="https://github.com/surajkumar05612/weather-app" blank="blank">Go To Project</a>
                            <p className="project-body">
                                Basic Weather App developed using HTML, CSS and JS. I have Used open Weather API to fetch live data of all cities. Simply we have to enter the city name and it will fetch the data of that city and will display in screen.
                            </p>
                        </div>
                        <div className="project-card">
                            <h2 className="title">ToDo- ReactJs</h2>
                            <a href="https://github.com/surajkumar05612/ToDo-React" target="blank">Go To Project</a>
                            <p className="project-body">
                                ToDo App Developed using ReactJs, HTML, CSS and JS. We can add, edit and delete our list. The data is getting stored in local storage.
                            </p>
                        </div>
                        <div className="project-card">
                            <h2 className="title">Grow Your Farms</h2>
                            <a href="https://growyourfarms.netlify.app/" target="blank">Go To Project</a>
                            <p className="project-body">
                                Developed a Full fledged responsive and dynamic website for a Tamil Nadu startup project. Implemented dynamic features like payment gateway, blog and success stories. As its confidential you can visit the hosted site.
                            </p>
                        </div>
                        <div className="project-card">
                            <h2 className="title">personal Portfolio</h2>
                            <a href="https://github.com/surajkumar05612/personal-portfolio-reactjs" target="blank">Go To Project</a>
                            <p className="project-body">
                                Developed my own portfolio using HTML, CSS, ReactJS and some react libraries. Made it as an assignment during programming pathsala MERN Stack course.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;