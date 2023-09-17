import React from 'react'
import Card from './Cards'
import './CenterContent.css'
export default function CenterContent() {
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
        },
        {   id:3,
            name:"Batch3",
            image:"https://tse4.mm.bing.net/th?id=OIP.rojpZESQqGOQiacDbjAyNQHaEK&pid=Api&P=0&h=180",
            start:"31 aug 2023 | end on 31 oct 2023"
        },
        {   id:4,
            name:"Batch4",
            image:"https://tse4.mm.bing.net/th?id=OIP.7Ltu9OrSLiUBINLHhKCfsQHaEK&pid=Api&P=0&h=180",
            start:"31 aug 2023 | end on 31 oct 2023"
        },
        {  id:5,
            name:"Batch5",
            image:"https://tse2.mm.bing.net/th?id=OIP.dqhilp82jQwLDkw4b0xCDAHaEK&pid=Api&P=0&h=180",
            start:"31 aug 2023 | end on 31 oct 2023"
        }
    ]
    const batch=course.map(el=>(
        <Card data={el} key={el.id}
        />
    ))
  return (
    <div className='center'>
     
      {batch}
    </div>
  )
}
