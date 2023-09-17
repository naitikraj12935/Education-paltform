import React from 'react'
import './Testcard.css'
export default function TestCard({data}) {
  return (
    <div className='tester'>
      <span>{data.subject}</span>
      <span>{data.topic}</span>
      <button>start</button>
    </div>
  )
}
