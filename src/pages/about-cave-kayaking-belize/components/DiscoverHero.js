
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
                      <StaticImage src="../../../images/about_kayaking_header.png" quality={60} formats={["auto", "webp"]} />
                    </>
                   
                    
                </Carousel>

            </div>
          
            </div>

        
            <div className="hero-box">
                <div className="max-width">
                    <h1>About Us</h1>
                    <h3>Belize is a true jewel for a wide variety of adventure activities and multiple-day expeditions. We specially cater to visitors looking for an in-depth feel and experience of inland Belize: Maya ruins, cave systems, rivers and jungle, culture and history. If you wish for us to customize part of your vacation through several days of daily activities or a multiple-day expeditions filled with excitement and wonderment, please contact us!</h3>
                    
                </div>
            </div>
     

        </div>     
                   <div className="main-content">
                <div className="featured-cont about">
                    <h3>Cave Kayaking Belize is our Sister location of our Main Location <b>Go Cave Tubing Belize Travel & Adventure.</b> Cave Kayaking Belize location fucuses primarily on Cave Kayaking Adventures in Belize, which are all arranged and done by our amazing team at <b>Go Cave Tubing Belize Travel & Adventure</b>, Belize leading cave tubing providers with over 700+ reviews on Google alone. <br /><br />Book with confidence, see Tour Operator information below and Guest feedback!</h3>
<p>  
<b>Go Cave Tubing Belize Travel & Adventure</b> has been welcoming travelers to Belize since 2002. Long before booking platforms and social media, our work was done the old-fashioned way—face to face, in the jungle, guiding guests through one of Belize's most iconic natural experiences.
<br /><br />
We began by specializing almost exclusively in cave tubing at the world-famous Nohoch Che'en Cave, Belize's most popular cave tubing site. By focusing on this single adventure for many years, we developed deep, hands-on knowledge of the river, the caves, and the safety standards required to guide guests confidently through Belize's underground world. That experience is something you can't learn from a manual—it comes from years on the water and in the caves.
<br /><br />
As our company grew, so did the adventures we offered. Today, Go Cave Tubing Belize Travel & Adventure provides a wide range of unforgettable experiences, including ATM Cave, Maya ruins, jungle ziplining, cave kayaking, Crystal Cave, and other immersive jungle adventures. Every tour is led by experienced local guides who know Belize not just as a destination, but as home. They share the land's history, culture, and stories in a way only locals can.
<br /><br />
In 2018, we officially expanded our presence online, making it easier than ever for travelers to find us, plan ahead, and book with confidence. Going online also allowed us to do more than just offer tours. We now help visitors with accommodation recommendations, island and sea tours, transportation guidance, and general Belize travel advice—so you're supported from the moment you start planning until the day you head home.
<br /><br />
At our core, we are still what we've always been: a locally operated company built on experience, honesty, and a genuine love for Belize's natural wonders. Whether it's your first time tubing through a cave or your tenth adventure in the jungle, we're here to make it safe, memorable, and real.
<br /><br />
Locally Owned. Trusted guides. Adventuring Belize since 2002.
</p>
<br /><br />
 <div class="elfsight-app-12649b15-f610-48ef-9433-d8a8cfb6be8a" data-elfsight-app-lazy></div>
                    <a id="tour-details" href="/cave-kayaking-belize-contact-information/" title="Contact Cave Kayaking Belize">Contact Us</a>
                
                </div>
            </div>          
	</div>

  

   
);
}


export default DiscoverHero