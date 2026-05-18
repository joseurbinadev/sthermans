import React, { useState, useRef, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image"

import "./../less/header.scss";

function App() {

  
    return (
      <div id="sticky-header" className="header">
      
        <nav  className="navbar navbar-expand-lg navbar-light">
             <a className="brand" href="/" title="Cave Kayaking Belize at Nohoch Che'en Caves Branch">     
              <StaticImage alt="Cave Kayaking Belize at Nohoch Che'en Caves Branch" src="../images/bck_logo_new.png" />
            
             </a>
            <div className="contact-block">

            <a href="/" title="Cave Kayaking Belize at Nohoch Che'en Caves Branch">
                {/*<i class="fa fa-phone" aria-hidden="true"></i>*/}
            <span></span>
            </a>
            </div>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
               
                <li class="nav-item">
                    <a href="/all-tours/" title="Cave Kayaking tours in Belize" class="nav-link">All Tours</a>
                </li>
                <li class="nav-item">
                    <a title="Cave Kayaking tours in Belize" class="nav-link" href="/cave-kayaking-in-nohoch-cheen-caves-branch-archaeological-reserve/">Cave Kayaking Belize</a>
                </li>
                <li class="nav-item">
                    <a title="About Cave Kayaking Belize" class="nav-link" href="/about-cave-kayaking-belize/">About Us</a>
                </li>
               
               
                <li class="nav-item">
                    <a title="Cave Kayaking in Belize Pictures" class="nav-link" href="https://www.facebook.com/profile.php?id=61574224753130&sk=photos" target="_blank">Gallery</a>
                </li>
              
                <li class="nav-item">
                  <a title="Contact Cave Kayaking Belize" class="nav-link" href="/cave-kayaking-belize-contact-information/">
                   Contact Us
                </a></li>
                </ul>
            
            </div>
         
        </nav>

        
      </div>
    );
  }
  
  export default App;