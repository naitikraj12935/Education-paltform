// ComCard.js

import React from 'react';
import './Comcard.css';

export default function ComCard({ data }) {
  return (
    <div className='comcard'>
      <div className='comcard-inner'>
        <div className='comcard-front'>
          <span>{data.name}</span>
          <img src={data.image} alt='' height={100} width={100}/>
          <span>{data.date}</span>
        </div>
        <div className='comcard-back'>
          <p>Venue:</p>
          <button className='register-button'>Register Now</button>
        </div>
      </div>
    </div>
  );
}

