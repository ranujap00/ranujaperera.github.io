/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa6';
import portrait1 from '../images/bc.png';
import portrait2 from '../images/tf.png';
import portrait3 from '../images/ai.png';
import portrait4 from '../images/db.png';

const Home = () => {
    return (
        <div className="home-container section" id="home">
            <div className="home-left">
                <p>Hi, there!</p>
                <p>
                    I'm <span>Ranuja Perera</span>
                </p>
                <br />
                <p>
                    Blockchain and backend developer with an essence of machine learning and deep learning integration
                </p>
                <div className="social-media-icons-container">
                    <div className="social-icon linkedin">
                        <a href="https://www.linkedin.com/in/ranuja-perera/">
                            <FaLinkedin style={{ color: 'black' }} className='socialHover' />
                        </a>
                    </div>
                    <div className="social-icon github">
                        <a href="https://github.com/ranujap00">
                            <FaGithub style={{ color: 'black' }} />
                        </a>
                    </div>
                    <div className="social-icon twitter">
                        <a href="https://twitter.com/ranujap00">
                            <FaXTwitter itter style={{ color: 'black' }} />
                        </a>
                    </div>
                    <div className="social-icon whatsapp">
                        <a href="https://wa.me/94725326372">
                            <FaWhatsapp style={{ color: 'black' }} />
                        </a>
                    </div>
                    <div className="social-icon instagram">
                        <a href="https://www.instagram.com/ranujaperera/">
                            <FaInstagram style={{ color: 'black' }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-right">
                <div className="image-container">
                    <img src={portrait1} alt="portrait 1" />
                    <img src={portrait2} alt="portrait 2" />
                    <img src={portrait3} alt="portrait 3" />
                    <img src={portrait4} alt="portrait 4" />
                </div>
            </div>
        </div>
    );
};

export default Home;
