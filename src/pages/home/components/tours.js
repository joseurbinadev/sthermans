import React from 'react'

function Tours() {
  return (
    <div className='all-tours'>
       <div className='row'>
        
         <div className='col-sm-6 tubing'>
            <a href="/cave-tubing-in-st-herman-blue-hole-national-park/">
              <div className='tour'>
                 <div className='price'>
                    <p>$60USD</p>
                    <span>Per Person</span>
                 </div>
                 <div className='desc'>
                   <h1>St. Herman's Cave Tubing</h1>
                 </div>
              </div>
              </a>
         </div>
         
         <div className='col-sm-6 exploration'>
            <a href="/cave-tubing-in-st-herman-blue-hole-national-park/">
              <div className='tour'>
                 <div className='price'>
                    <p>$90USD</p>
                    <span>Per Person</span>
                 </div>
                 <div className='desc'>
                   <h1>Cave Tubing & Cave Exploration</h1>
                 </div>
              </div>
              </a>
         </div>
         <div className='col-sm-6 birding'>
             <a href="/birding-in-st-hermans-blue-hole-national-park/">
              <div className='tour'>
                 <div className='price'>
                    <p>$75USD</p>
                    <span>Per Person</span>
                 </div>
                 <div className='desc'>
                   <h1>Birding</h1>
                 </div>
              </div>
              </a>
         </div>
         <div className='col-sm-6 choco'>
            <a href="/lamanai-chocolate-in-belize/">
              <div className='tour'>
                 <div className='price'>
                    <p>$60USD</p>
                    <span>Per Person</span>
                 </div>
                 <div className='desc'>
                   <h1>Lamani Chocolate & Cave Tubing</h1>
                 </div>
              </div>
              </a>
         </div>
       </div>
    </div>
  )
}

export default Tours
