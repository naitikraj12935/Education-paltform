import React from 'react'

import SchoolCard from './SchoolCard' 
import './School.css'
export default function School() {
    const myschool=[
        {   
            id:1,
            name:"GD-Gooneka",
            image:"https://tse2.mm.bing.net/th?id=OIP.A07QjVXaD6Kn1TAyJyojQQHaDt&pid=Api&P=0&h=180",
            date:"Admission-open"
        },
        {   id:2,
            name:"ST-xansavier",
            image:"https://tse4.mm.bing.net/th?id=OIP.B7ko_8B0ydnK8i7hAB0M8gHaCp&pid=Api&P=0&h=180",
            date:"Admission-open"
        },
        {   id:3,
            name:"ZEE Mount Litera",
            image:"https://tse2.mm.bing.net/th?id=OIP.ZNO-mn24xMnsDbtDvWQv2AHaDx&pid=Api&P=0&h=180",
            date:"Admission-open"
        },
        {   id:4,
            name:"D.A.V",
            image:"https://tse2.mm.bing.net/th?id=OIP.D62Qm34OWLfUwdYl_fEfQAHaEE&pid=Api&P=0&h=180",
            date:"Admission-open"
        }
    ]
    const schools=myschool.map(el=>(
        <SchoolCard data={el} key={el.id}
        />
    ))
  return (
    <div className='tieupgroup'>
    
     
      {schools}
    </div>
  )
}
