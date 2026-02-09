import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Picks() {
  return (
    <div className='top-picks'>
      <div className='row'>
        <div className='col-sm-3'>
            <a href="/visit-xunantunich-maya-ruins-belize/">
                <div className='overlay'></div>
                <StaticImage src='../../../images/sthermans_xunan_cta.png' />
                <div className='cont'>
                <h1>St. Herman's Cave tubing & Xunantunich Maya Ruins</h1>
                <h2>$125USD</h2>
                <p>Xunantunich is one of Belize’s most impressive and accessible Maya archaeological sites, set within a lush tropical forest preserve in the Cayo District…</p>
                </div>
            </a>
        </div>
        <div className='col-sm-3'>
            <a href="/cave-tubing-in-st-herman-blue-hole-national-park/">
                <div className='overlay'></div>
                <StaticImage src='../../../images/sthermans_caving_cta.png' />
                <div className='cont'>
                <h1>St. Herman's Cave Tubing & Spelunking</h1>
                <h2>$90USD</h2>
                <p>Located along the scenic Hummingbird Highway near Belmopan, this guided tour takes you deep into the St.Herman's Cave system…</p>
                </div>
            </a>
        </div>
            <div className='col-sm-3'>
            <a href="/cave-tubing-in-st-herman-blue-hole-national-park/">
                <div className='overlay'></div>
                <StaticImage src='../../../images/blue_hole_cta.png' />
                <div className='cont'>
                <h1>St. Herman's Cave Spelunking & Inland Blue Hole Swim</h1>
                <h2>$80USD</h2>
                <p>St.Herman’s Cave system, where calm underground rivers flow through ancient limestone chambers once used by the Mayas…</p>
                </div>
            </a>
        </div>
        <div className='col-sm-3'>
            <a href="/cave-kayaking-in-nohoch-cheen-caves-branch/">
                <div className='overlay'></div>
                <StaticImage src='../../../images/kayaking_cta.png' />
                <div className='cont'>
                <h1>5 Mile Cave Kayaking & Crystal Cave Exploration</h1>
                <h2>$100USD</h2>
                <p>Set within the Caves Branch Cave System, this guided adventure takes you along a calm stretch of river that flows through multiple limestone caves…</p>
                </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Picks
