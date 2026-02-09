import React, { useState, useRef, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image"

import "./../less/header.scss";

function App() {

  
    return (
      <div id="sticky-header" className="header">
      
        <nav  className="navbar navbar-expand-lg navbar-light">
             <a className="brand" href="/" title="St. Herman's Cave Belize">  
              St. Herman's Cave Tubing Masters
             </a>
            <div className="contact-block">

            <a href="/" title="Cave Tubing Belize at St. Herman's Cave Belize">
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
                    <a title="" class="nav-link" href="">About St. Herman's Cave</a>
                </li>
                <li class="nav-item">
                    <a title="" class="nav-link" href="">Inland Blue Hole</a>
                </li>
                <li class="nav-item">
                    <a title="St. Herman's Cave Tours Belize" class="nav-link" href="/all-tours">Our Tours</a>
                </li>
               
               
                <li class="nav-item">
                    <a title="About St. Herman's Cave Belize Tours" class="nav-link" href="">Who we are?</a>
                </li>
                <li class="nav-item">
                    <a title="St. Herman's Cave Belize Tours Images" class="nav-link" target ="_blank"href="https://www.facebook.com/StHermansCaveTubingBelize/photos">Gallery</a>
                </li>
                <li class="nav-item">
                  <a title="" class="nav-link" href="" >
                   Contact Us
                </a></li>
                </ul>
            
            </div>
         
        </nav>

        
      </div>
    );
  }
  
  export default App;