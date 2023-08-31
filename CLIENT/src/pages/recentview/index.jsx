import React from 'react'
import Header from '../../components/Header/header';
import { video } from '../../utlis';

function Recentview() {
  return (
    <div>
        <Header/>
        <div className="container">
            <h2>Recently view</h2>
            <hr className='uline' />
            <div className="recent-content">
              {video.map((itm) => (
                <div className="video-list" key={itm.id}>
                  {itm.vid}
                </div>
              ))}
            </div>
    </div>
    </div>
  )
}

export default Recentview;