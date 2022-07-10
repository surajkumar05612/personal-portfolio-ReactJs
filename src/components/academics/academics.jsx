import React from "react";
import "./academics.css";

function Academics() {
    return(
        <>
            <section className="academics" id="academics">
                <div className="academics-parent">
                    <h2 className="academics-heading">
                        Educational Qualification
                    </h2>
                    <div className="academics-container">
                        <div className="academics-card">
                            <div className="card-heading">
                                <div className="card-left">
                                    <h4>BTech in Computer Science and Engineering</h4>
                                    <p className="sub-head">Lovely Professional University (2019 - 2023)</p>
                                </div>
                                <div className="card-right">
                                    <button>7.33 CGPA</button>
                                </div>
                            </div>
                            <hr/>
                            <p className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat, laudantium totam similique iure explicabo illo magnam earum praesentium aliquid!
                            </p>
                        </div>
                        <div className="academics-card">
                            <div className="card-heading">
                                <div className="card-left">
                                    <h4>Higher Secondary Education</h4>
                                    <p className="sub-head">Kendriya Vidyalaya No-1, Cuttack (2017 - 2019)</p>
                                </div>
                                <div className="card-right">
                                    <button>72 %</button>
                                </div>
                            </div>
                            <hr/>
                            <p className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat, laudantium totam similique iure explicabo illo magnam earum praesentium aliquid!
                            </p>
                        </div>
                        <div className="academics-card">
                            <div className="card-heading">
                                <div className="card-left">
                                    <h4>Secondary Education</h4>
                                    <p className="sub-head">Kendriya Vidyalaya No-1, Cuttack (2015 - 2017)</p>
                                </div>
                                <div className="card-right">
                                    <button>9.8 CGPA</button>
                                </div>
                            </div>
                            <hr/>
                            <p className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat, laudantium totam similique iure explicabo illo magnam earum praesentium aliquid!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Academics;