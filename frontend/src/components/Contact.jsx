/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
    const [resultMessage, setResultMessage] = useState('');
    const [resultClass, setResultClass] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        setResultMessage('Please wait...');

        var object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });

        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            const jsonResponse = await response.json();

            if (response.status === 200) {
                setResultMessage(jsonResponse.message);
                setResultClass('result-text-green');
            } else {
                setResultMessage(jsonResponse.message);
                setResultClass('result-text-red');
            }
        } catch (error) {
            console.error(error);
            setResultMessage('Something went wrong!');
            setResultClass('result-text-red');
        }

        form.reset();

        setTimeout(() => {
            setResultMessage('');
        }, 8000);
    };

    return (
        <div className="contact-container section">
            <div className="contact-box">
                <h2>Contact Me</h2>
                <p>Feel free to reach out for inquiries, collaborations, or just to say hello. I'm here!</p>
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
                <form id="contact-form" onSubmit={handleSubmit}>

                    <input type="hidden" name="access_key" value="331d96a7-883c-4b25-bf41-99a623fa4e00" />
                    <input type="hidden" name="subject" value="New Message from Portfolio Website" />
                    <input type="hidden" name="from_name" value="New Message" />
                    <input type="checkbox" name="botcheck" id="botcheck" style={{ display: 'none' }} />

                    <input type="text" name="Name" id="name" placeholder="Your Name" required />
                    <input type="email" name="email" id="email" placeholder="Email Address" required />
                    <input type="text" name="Phone Number" id="phone" placeholder="Phone Number" />
                    <textarea name="message" id="message" rows="4" placeholder="How can I help you?" required></textarea>

                    <button type="submit">Send</button>

                    <div id="form-result" className="result-text result-text-blue"></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
