
import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function DiscoverHero() {

	return (
                 
    <div className="discover-hero">

        <div className="wrapper">

            <div className="discover-carousel">
           
            <div >

                <Carousel >
                   
                    <>
                      <StaticImage src="../../../images/tours_header_img.png" quality={60} formats={["auto", "webp"]} />
                    </>
                   
                    
                </Carousel>

            </div>
          
            </div>

        
            <div className="hero-box">
                <div className="max-width">
                    <h1>All Tours</h1>
                    <h3>Belize will exceed your expectations: it’s more natural, exciting and colourful than what can be seen on our monitors or telephone screens. Whatever your passion, you’ll be able to Belize it with us. Plus, sharing a trip here with people who mean the most to you, will create lifelong memories of breath-taking beauty, dramatic scenery and an incredible admiration for Belize’s vegetation, cave systems and the second largest barrier reef of the western hemisphere.</h3>
                </div>
            </div>
     

        </div>              
	</div>

  

   
);
}


export default DiscoverHero