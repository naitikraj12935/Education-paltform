// Librarycard.js

import React from 'react';
import './Librarycard.css';

export default function Librarycard({ data }) {
  return (
    <div className='library-card'>
      <div className='library-card-inner'>
        <div className='library-card-front'>
          <span>{data.name}</span>
          <img src={data.image} alt='' className='library-card-image' />
          <span>by - {data.by}</span>
        </div>
        <div className='library-card-back'>
          <p>Description: {data.description}</p>
          <button className='read-button'>Read</button>
        </div>
      </div>
    </div>
  );
}


