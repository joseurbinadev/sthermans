import React from 'react'

function Tours() {
  return (
    <div className='all-tours'>
       <div className='row'>
        
         <div className='col-sm-6 tubing'>
            <a href="/cave-kayaking-in-nohoch-cheen-caves-branch-archaeological-reserve/" title="Cave Kayaking Tours in Belize at Nohoch Cheen Caves Branch">
              <div className='tour'>
                 <div className='price'>
                    <p>$95USD</p>
                    <span>Per Person</span>
                 </div>
                 <div className='desc'>
                   <h1>5 Mile Cave Kayaking Belize</h1>
                 </div>
              </div>
              </a>
         </div>
         
         <div className='col-sm-6 exploration'>
            <a href="/cave-tubing-in-nohoch-cheen-caves-branch-archaeological-reserve/" title="Cave Tubing Tours in Belize at Nohoch Cheen Caves Branch">
              <div className='tour'>
                 <div className='price'>
                    <p>$50USD</p>
                    <span>Per Person</span>
                 </div>
                 <div className='desc'>
                   <h1>Cave Tubing Belize</h1>
                 </div>
              </div>
              </a>
         </div>
         <div className='col-sm-6 birding'>
             <a href="" title="Belize River Canoeing">
              <div className='tour'>
                 <div className='price'>
                    <p>$185USD</p>
                    <span>Per Person</span>
                 </div>
                 <div className='desc'>
                   <h1>Belize River Canoeing</h1>
                 </div>
              </div>
              </a>
         </div>
         <div className='col-sm-6 choco'>
            <a href="/jungle-zip-line-at-nohoch-cheen-caves-branch-archaeological-reserve/" title="Jungle Zipline Tours in Belize">
              <div className='tour'>
                 <div className='price'>
                    <p>$45USD</p>
                    <span>Per Person</span>
                 </div>
                 <div className='desc'>
                   <h1>Jungle Zipline Belize</h1>
                 </div>
              </div>
              </a>
         </div>
       </div>
    </div>
  )
}

export default Tours
