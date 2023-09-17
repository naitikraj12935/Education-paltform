import React from 'react'
import './Videoani.css'
import Somke from './austronut.mp4'
export default function Videoani() {
  return (
    <div className="video-container">

    
    <section>
    <video src={Somke} autoPlay muted></video>
        <h1>
            <span>E</span>
            <span>D</span>
            <span>U</span>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>N</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>

        </h1>
    </section>
     </div>
  )
}
