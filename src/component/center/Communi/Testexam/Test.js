import React from 'react'
import TestCard from './TestCard.js'
import './Test.css'
export default function Test() {
    const testinfo=[
        {
            id:1,
            subject:"physics",
            topic:"optics"
        },
        {
            id:2,
            subject:"Chemistry",
            topic:"Hyberdization"
        },
        {
            id:3,
            subject:"Math",
            topic:"limit and continuty"
        },
        {
            id:4,
            subject:"Math",
            topic:"vector & 3D"
        },
        {
            id:5,
            subject:"physics",
            topic:"Electric charge and field"
        },
        {
            id:6,
            subject:"physics",
            topic:"optics"
        },
        {
            id:7,
            subject:"physics",
            topic:"S.H.M"
        },
        {
            id:8,
            subject:"Chemistry",
            topic:"Solution"
        },
        {
            id:9,
            subject:"Biology",
            topic:"Control and cordination"
        },
        {
            id:10,
            subject:"Biology",
            topic:"Human Evolution"
        }
    ]
    const testing=testinfo.map(el=>(
        <TestCard key={el.id} data={el}/>
    ))
  return (
    <div className='test-info'>
     <h1>Test-Series</h1>
      {testing}
    </div>
  )
}
