import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

function Picks() {
  return (
    <div className='top-picks'>
      <div className='row'>
        <div className='col-sm-3'>
            <a href="/cave-kayaking-in-nohoch-cheen-caves-branch-archaeological-reserve/">
                <div className='overlay'></div>
                <StaticImage src='../../../images/zipline_new_bg.png' />
                <div className='cont'>
                <h1>5 Mile Cave Kayaking & Jungle Zipline</h1>
                <h2>$14oUSD</h2>
                <p>Belize Cave Kayaking with Jungle zipline combo adventure offers both …</p>
                </div>
            </a>
        </div>
        <div className='col-sm-3'>
            <a href="/cave-kayaking-in-nohoch-cheen-caves-branch-archaeological-reserve/">
                <div className='overlay'></div>
                <StaticImage src='../../../images/kayaking_new_bg.png' />
                <div className='cont'>
                <h1>Extended 5 Mile Cave Kayaking Adventure</h1>
                <h2>$95USD</h2>
                <p>Located at the Nohoch Che'en Caves Branch Archaeological Reserve...</p>
                </div>
            </a>
        </div>
            <div className='col-sm-3'>
            <a href="/cave-tubing-in-nohoch-cheen-caves-branch-archaeological-reserve/">
                <div className='overlay'></div>
                <StaticImage src='../../../images/tubing_new_bg.png' />
                <div className='cont'>
                <h1>Ultimate Cave Tubing Adventure</h1>
                <h2>$50USD</h2>
                <p>Experience the BEST Cave Tubing Adventure in Belize with Top-Knotch Guides and Premium gear...</p>
                </div>
            </a>
        </div>
        <div className='col-sm-3'>
            <a href="/cave-kayaking-in-nohoch-cheen-caves-branch-archaeological-reserve/">
                <div className='overlay'></div>
                <StaticImage src='../../../images/crystal_new_bg.png' />
                <div className='cont'>
                <h1>5 Mile Cave Kayaking & Crystal Cave Exploration</h1>
                <h2>$150USD</h2>
                <p>Combine some Cave Exploration with a Laid Back Cave Kayaking adventure at Nohoch Che'en Caves Branch...</p>
                </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Picks
