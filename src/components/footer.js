import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";


import { Container, Row, Col, ul } from "react-bootstrap" 
import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";

const MainLogo = "../images/UDT-Main-Logo.png";
     

function Footer() {
	return (
    <div className="footer">
        <div className="footer-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <div className="footer-content">
                <a class="footer-brand" href="#">  <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} /></a>
                <p>St. Herman's Cave Tours are more private and laid back as there are no cruise ship guests visiting the park. Feel free to get in touch with us if you wish to book your adventure here.</p>
                    <ul className="social">
                                <li>
                                    <p id="social-main">Stay Connected: </p>
                                    <a href="https://www.facebook.com/share/1ATMWufGRp/?mibextid=wwXIfr" target="_blank"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/sthermanscavebelize?igsh=MXF0bnB2aWZueTByMQ==" target="_blank"><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
                        <h1>Quick Links</h1>
                        <p><a href="">About Us</a></p>
                        <p><a href="/all-tours">Our Tours</a></p>
                        <p><a href="">Combo Deals</a></p>
                        <p><a href="">Contact Us</a></p>
               
                </div>
            </div>
            <div className="col-sm-4 second">
                <div className="footer-content">
                    <h1>Reach Us</h1>
                    <p>
                        TEL: 
                    </p>
                    <a href="tel:5016326018">+(501) 632 6018</a>
                    <p>
                        EMAIL:
                    </p>
                    <a href="mailto:info@sthermanscavebelize.com">info@sthermanscavebelize.com</a>
                    <p>
                        OFFICE HOURS:
                    </p>
                    <a href="">Mon - Sun, 8:00am to 4:00pm CST</a>
                </div>
            </div>

        </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} St. Herman's Cave Belize Tours. All Rights Reserved. Belize.</p>
        </div>
       
	</div>
    

    );
}

export default Footer;

