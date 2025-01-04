import React from "react";
import './Footer.css'


const Footer=()=>{
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src="src/assets/logodark.png" alt="logo"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="footer-social-icons">
                        <img src="src/assets/facebook_icon.png" alt="" />
                        <img src="src/assets/twitter_icon.png" alt="" />
                        <img src="src/assets/linkedin_icon.png" alt="" />
                    </div>
                </div>
                <div className="footer-content-centre">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>phone number</li>
                        <li>email id</li>
                    </ul>
                     
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Eventura</p>
        </div>
    );
}

export default Footer; 