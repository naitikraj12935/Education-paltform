import React from 'react'
import ComCard from './ComCard'
import './comm.css'
export default function Communication() {
    const discussion=[
        {   
            id:1,
            name:"SPeach-Day1",
            image:"https://tse3.mm.bing.net/th?id=OIP.vvZXc4LORyxY1MejsJMEJwHaHr&pid=Api&P=0&h=180",
            date:"31 aug 2023"
        },
        {   id:2,
            name:"GD-Day2",
            image:"https://thumbs.dreamstime.com/z/group-business-people-having-meeting-around-conference-collaboration-discussion-process-conference-presentation-59626146.jpg",
            date:"05 sep 2023"
        },
        {   id:3,
            name:"Debate-Day3",
            image:"https://tse2.mm.bing.net/th?id=OIP.K2C-3IKM9YDgCuEnjeWYTgHaEN&pid=Api&P=0&h=180",
            date:"12 sep 2023"
        },
        {   id:4,
            name:"GD-Day4",
            image:"https://cdn.dribbble.com/users/3750213/screenshots/8353916/custom___1_2x_4x.png",
            date:"28 sep 2023"
        }
    ]
    const language=discussion.map(el=>(
        <ComCard data={el} key={el.id}
        />
    ))
  return (
    <div className='commnigroup'>
     
      {language}
    </div>
  )
}
