/* eslint-disable no-unused-vars */

export default function MobileNavBar() {
    return (
        <div className="mobile-navbar">
            <input type="checkbox" id="check" />
            <div className="btn_open">
                <label htmlFor="check">
                    <i className="fas fa-bars"></i>
                </label>
            </div>
            <div className="mobile-menu">
                <div className="btn_close">
                    <label htmlFor="check">
                        <i className="fas fa-times"></i>
                    </label>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home"><i className="fa-solid fa-house"></i>Home</a></li>
                        <li><a href="#about"><i className="fa-solid fa-user"></i>About</a></li>
                        <li><a href="#work"><i className="fa-solid fa-briefcase"></i>Work Experience</a></li>
                        <li><a href="#education"><i className="fa-solid fa-user-graduate"></i>Education</a></li>
                        <li><a href="#skills"><i className="fa-solid fa-chart-pie"></i>Skills</a></li>
                        <li><a href="#projects"><i className="fa-solid fa-layer-group"></i>Projects</a></li>
                        <li><a href="#contact-form"><i className="fa-solid fa-envelope"></i>Contact</a></li>
                    </ul>
                </nav>
                <div className="profile">
                    <div className="profile-image">
                        <img src="images/img.jpg" alt="Profile" />
                    </div>
                    <div className="profile-detail">
                        <p>Ranuja Perera</p>
                        <p><a href="mailto:ranujap00@gmail.com">ranujap00@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}