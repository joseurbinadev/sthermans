
import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function DiscoverHero() {

	return (
                 
    <div className="discover-hero contact">

        <div className="wrapper">

            <div className="discover-carousel">
           
            <div >

                <Carousel >
                   
                    <>
                      <StaticImage src="../../../images/kayaking_contact_header.png" quality={60} formats={["auto", "webp"]} />
                    </>
                   
                    
                </Carousel>

            </div>
          
            </div>

        
            <div className="hero-box">
                <div className="max-width">
                    <h1>Contact Us</h1>
                    <h3>Go Cave Tubing Belize Travel & Adventure is  conveniently runs tours at the Nohoch Che'en Caves Branch Archaeological Reserve. This is Belize's Premiere location for activities
                        such as Cave Tubing, Cave Kayaking, Crystal Cave Chamber, Jungle Zipline, and Jungle ATV. 
                    </h3>
                </div>
            </div>
     

        </div>     
                   <div className="main-content">
                <div className="featured-cont contact">
                        <div className="row">
                    <div className="col-sm-6">
                             <h3>Cave Kayaking Belize is our Sister location of our Main Location <b>Go Cave Tubing Belize Travel & Adventure.</b> Cave Kayaking Belize location fucuses primarily on Cave Kayaking Adventures in Belize, which are all arranged and done by our amazing team at <b>Go Cave Tubing Belize Travel & Adventure</b>, Belize leading cave tubing providers with over 700+ reviews on Google alone. <br /></h3>
               
                        <p>
 <strong>Go Cave Tubing Belize Travel & Adventure</strong> is conveniently located approximately a 45 minutes drive from the Philip Goldson International Airport. Our Tours take place at the famous Nohoch Che'en Caves Branch Archaeological reserve.
 This reserve is Belize's Hotspot for activities such as Cave Tubing, Cave Kayaking, Crystal Cave, Jungle Zipline, and Jungle ATV adventures.
 <br /><br />In 2018, we officially expanded our presence online, making it easier than ever for travelers to find us, plan ahead, and book with confidence. Going online also allowed us to do more than just offer tours. We now help visitors with accommodation recommendations, island and sea tours, transportation guidance, and general Belize travel advice—so you’re supported from the moment you start planning until the day you head home.
 
</p> <br />
<h3>Give us a shout, we answer in minutes!</h3>
<p>
    Email: <a href="mailto:info@gocavetubingbelize.com">info@gocavetubingbelize.com</a>
</p>
<p>
   Phone/Whatsapp: <a href="tel:+5016032141">+501 603 2141</a>
</p>
<p>
    <a target="_blank" href="https://www.google.com/maps/dir//37+Miles+George+Price+Highway,+Frank's+Eddy+Village+Cayo+District,+Belize+Belmopan+City,+Belize+City/@17.2079314,-88.7327759,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8f5dd2168f06717d:0xa2f6cbf478fa7fc8!2m2!1d-88.6503741!2d17.2079481?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D">Get Directions</a>
</p>
                    </div>
                    <div className="col-sm-6">
                         <div class="elfsight-app-b6fb1f22-8dcd-4251-90dc-4f61508e8e1e" data-elfsight-app-lazy></div>
                 
                    </div>
                </div>
                
                
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.2234081209162!2d-88.6503741!3d17.2079481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dd2168f06717d%3A0xa2f6cbf478fa7fc8!2sNohoch%20Che&#39;en%20Caves%20Branch%20Archaeological%20Reserve%20(Cave%20Tubing%2C%20Cave%20Kayaking%20%26%20Jungle%20Zipline)!5e0!3m2!1sen!2sbz!4v1752703507930!5m2!1sen!2sbz" width="100%" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>          
	</div>

  

   
);
}


export default DiscoverHero