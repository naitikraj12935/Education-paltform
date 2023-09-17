import React from 'react'
import './SCard.css'

export default function StudyCard({data}) {
  return (
    <div className='scard'>
     
      <span>{data.name}</span>
      <img src={data.image} height={200} width={200} alt="" />
      <span>{data.start}</span>
     
      <div className='button'>
        
        <button className='start'>Start</button>
      </div>
    </div>
  )
}