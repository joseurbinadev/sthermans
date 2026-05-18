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
                <a class="footer-brand" href="#">  <StaticImage src="../images/bck_logo_new.png" quality={60} formats={["auto", "webp", "avif"]} /></a>
                <p>Book with confidence, you are booking with Go Cave Tubing Belize Travel & Adventure, Belize's leading Cave Tubing providers with over 700 Reviews on Google alone.</p>
                    <ul className="social">
                                <li>
                                    <p id="social-main">Stay Connected: </p>
                                    <a href="https://www.facebook.com/cavekayakingbelize" target="_blank"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/cavekayakingbelize?igsh=a25jNDF0ZWkwNzZy&utm_source=qr" target="_blank"><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>
            <div className="col-sm-4">
               <div className="footer-content">
                        <h1>Quick Links</h1>
                        <p><a href="/about-cave-kayaking-belize/">About Us</a></p>
                        <p><a href="/all-tours">Our Tours</a></p>
                        <p><a href="/all-tours/">Combo Deals</a></p>
                        <p><a href="/cave-kayaking-belize-contact-information/">Contact Us</a></p>
               
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
                    <a href="mailto:info@gocavetubingbelize.com">info@gocavetubingbelize.com</a>
                    <p>
                        OFFICE HOURS:
                    </p>
                    <a href="">Mon - Sun, 8:00am to 4:00pm CST</a>
                </div>
            </div>

        </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Cave Kayaking Belize. All Rights Reserved. Belize.</p>
        </div>
       
	</div>
    

    );
}

export default Footer;

