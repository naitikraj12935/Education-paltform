import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
 // This line
 import communication from './conversation.png'
 import study from './study.png'
 import test from './test.png'
 import school from './school.png'
 import library from './bookshelf.png'
 import batch from './batch-processing.png'
 import result from './data-science.png'




export default function Sidebar() {
  return (
    <div className='scroll-bar'>
     <div className='home'> <img src={study} alt="" height={25} width={25}/><Link to="/">home </Link></div>
    <div className='study'> <img src={study} alt="" height={25} width={25}/><Link to="/study">study </Link></div>
     <div className='batch'> <img src={batch} alt="" height={25} width={25}/>  <Link to="/batch">Batches </Link></div>
     <div className='school'> <img src={school} alt="" height={25} width={25}/><Link to="/school">School </Link></div>
     <div className='motive'> <img src="https://cdn-icons-png.flaticon.com/512/3108/3108303.png" alt="" height={25} width={25}/>connect-india</div>
     <div className='test'> <img src={test} alt="" height={25} width={25}/><Link to="/test">Test-Series </Link></div>
     <div className='communication'> <img src={communication} alt="" height={25} width={25} /><Link to="/communication">Communication </Link></div>
     
     
     <div className='library'> <img src={library} alt="" height={25} width={25}/><Link to="/library">Library </Link></div>
     <div className='scholar'> <img src="https://cdn-icons-png.flaticon.com/512/201/201614.png" alt="" height={25} width={25}/>scholership-league</div>
     <div className='result'> <img src={result} alt=""height={25} width={25}/>result</div>
     <div className='see-more'>
        see
     </div>

      
    </div>
  )
}
