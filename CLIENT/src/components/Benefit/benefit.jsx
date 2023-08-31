import React from 'react'
import { platform } from '../../utlis'

export default function Benefit() {
  return (
    <div>
        <div className="platform">
            <div className="container">
                <h1>The benefit of using our platform</h1>
                <div className="platform-content">
                {platform.map((itm)=>(
                  <div className="platform-list" key={itm.txt}>
                    <img src={itm.img} alt="loading"/>
                    <h3>{itm.txt}</h3>
                    <p>{itm.para}</p>
                </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}
