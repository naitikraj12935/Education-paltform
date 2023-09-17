import React from 'react'
import StudyCard from './StudyCard'
import './Study.css'
export default function Study() {
    const course=[
        {   
            id:1,
            name:"Batch1",
            image:"https://tse1.mm.bing.net/th?id=OIP.kpHDj-q7P_2N-5QBk7pHvwHaEK&pid=Api&P=0&h=180",
            start:"31 aug 2023 | end on 31 oct 2023"
        },
        {   id:2,
            name:"Batch2",
            image:"https://tse3.mm.bing.net/th?id=OIP.UIIJ1Mjwt_iPBsK8CuUz7wHaEK&pid=Api&P=0&h=180",
            start:"31 aug 2023 | end on 31 oct 2023"
        }
    ]
    const enroll=course.map(el=>(
        <StudyCard data={el} key={el.id}
        />
    ))
  return (
    <div className='center'>
     
      {enroll}
    </div>
  )
}
