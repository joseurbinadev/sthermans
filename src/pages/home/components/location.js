import React from 'react'

function Location() {
  return (
    <div className='location'>
        <div className='location-main'>
            
            <div className='row'>
                <div className='col-sm-6 cont'>
                    <h1>Location</h1>
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i>Located at Mile 42 on the scenic Hummingbird Highway.</p>
                    <p><i class="fa fa-paw" aria-hidden="true"></i>Camping Grounds and Jungle Trails.</p>
                    <p><i class="fa fa-life-ring" aria-hidden="true"></i>St. Herman's Cave Tubing & Cave Exploration.</p>
                    <p><i class="fa fa-twitter" aria-hidden="true"></i>Birding Tours.</p>
                    <p><i class="fa fa-globe" aria-hidden="true"></i>Inland Blue Hole Swim.</p>
                    
                </div>
                <div className='col-sm-6'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38431.018416075094!2d-88.71017970640092!3d17.129306390791747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dd1aaa762e353%3A0x794a7c18b2c1b3d4!2sSt.%20Herman&#39;s%20Blue%20Hole%20National%20Park!5e0!3m2!1sen!2sbz!4v1770525134229!5m2!1sen!2sbz" width="100%" height="650" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Location
