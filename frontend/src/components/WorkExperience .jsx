/* eslint-disable no-unused-vars */
import React from 'react';
import liveroom from '../images/liveroom.png'
import kaiju from '../images/kaiju.jpg'
import ethereum from '../images/ethereum.webp'
import solidity from '../images/solidity.png'
import csharp from '../images/csharp.png'
import unity from '../images/unity.png'
import node from '../images/node.png'
import python from '../images/python.png'
import serverless from '../images/serverless.png'
import aws from '../images/aws.png'

const WorkExperience = () => {
    return (
        <div className="work-container section" id="work">
            <div className="work-experience section-box">
                <h2>Work Experience</h2>
                <div className="work-experience-top">
                    <div className="work-top-text">
                        <p>Trainee Software Engineer</p>
                        <p>LiveRoom Pvt Ltd</p>
                        <p>January 2023 – Present</p>
                    </div>
                    <div className="work-top-logos">
                        <div className="work-top-logo">
                            <img src={liveroom} alt="LiveRoom Logo" />
                        </div>
                        <div className="work-top-logo">
                            <img src={kaiju} alt="Kaiju Logo" />
                        </div>
                    </div>
                </div>
                <div className="work-text">
                    <p>
                        Worked on the Kaiju Wallet Project which is a mobile app to make transactions using
                        <strong>blockchain technology</strong>. The wallet can be used to store tokens, NFTs and transfer them to
                        another
                        account.
                        Developed a web3 game which runs on blockchain technology along with the Kaiju Wallet. Developed
                        a unity plugin and an SDK for game developers to connect their ERC 4337 accounts to mint NFTs
                        and tokens in the game and purchase NFTs from a marketplace. Gathered knowledge in <strong>AWS
                            cloud
                            computing, python, C#, solidity, unity, serverless framework, and nodeJS</strong>.
                    </p>
                    <div className="work-bottom-logo">
                        <img src={ethereum} />
                        <img src={solidity} />
                        <img src={csharp} />
                        <img src={unity} />
                        <img src={node} />
                        <img src={python} />
                        <img src={serverless} />
                        <img src={aws} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
