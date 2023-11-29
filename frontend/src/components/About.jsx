/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import portrait from '../images/img.jpg';
const About = () => {
    return (
        <div className="about-container section" id="about">
            <div className="about-left">
                <div className="about-image">
                    <img src={portrait} alt="portrait" />
                </div>
            </div>
            <div className="about-right">
                <div className="about-text-container">
                    <h2>About Me</h2>
                    <p>
                        I am a determined and ambitious 3rd-year undergraduate student at the Sri Lanka Institute of Information
                        Technology (SLIIT), where I have specialized in Data Science.
                    </p>
                    <p>
                        I have actively completed numerous personal and academic projects, where I've had the opportunity to apply
                        and expand my skills. Whether it's data analysis, predictive modeling, or creating data-driven solutions, I
                        relish the challenges that data science presents.
                    </p>
                    <p>
                        In particular, I am deeply passionate about Machine Learning and Deep Learning. These cutting-edge
                        technologies have captured my imagination, and I'm committed to staying at the forefront of these rapidly
                        evolving fields.
                    </p>
                    <p>
                        Beyond Data Science, I have a diverse skill set that includes experience in backend development and a keen
                        interest in blockchain technology. These additional competencies have broadened my horizons, allowing me to
                        approach problems from different angles and build a more comprehensive understanding of technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
