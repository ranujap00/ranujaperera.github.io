/* eslint-disable no-unused-vars */
import React from 'react';
import sliit from '../images/sliit-web-logo.png'
import dssc from '../images/D._S._Senanayake_College_crest.2e477a8c.png'
import esoft from '../images/esoft.png'

const Education = () => {
    return (
        <div className="education-container section" id="education">
            <div className="education-box section-box">
                <h2>Education</h2>

                <div className="institute">
                    <div className="institute-logo">
                        <img src={sliit} alt="SLIIT Logo" />
                    </div>
                    <div className="institute-details">
                        <p>SLIIT Malabe</p>
                        <p>January 2021 – Present</p>
                        <p>BSc. (Hons) in Information Technology – Data Science</p>
                        <p>Cumulative GPA: 3.56</p>
                    </div>
                </div>

                <div className="institute">
                    <div className="institute-logo">
                        <img src={dssc} alt="D.S Senanayake College Logo" />
                    </div>
                    <div className="institute-details">
                        <p>D.S Senanayake College, Colombo 7</p>
                        <p>2017 – 2019</p>
                        <p>Advanced Levels – Mathematics stream</p>
                        <p>Mathematics: A</p>
                        <p>Ordinary Levels: 7A 2B</p>
                    </div>
                </div>

                <div className="institute">
                    <div className="institute-logo">
                        <img src={esoft} alt="ESoft Logo" />
                    </div>
                    <div className="institute-details">
                        <p>ESoft Metro Campus</p>
                        <p>2020</p>
                        <p>Diploma in AutoCAD (2D and 3D)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
