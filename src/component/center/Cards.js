// Card.js

import React from 'react';
import './Card.css';

export default function Card({ data }) {
  return (
    <div className='card'>
      <div className='card-inners'>
        <div className='card-fronts'>
          <img src={data.image} alt='' className='card-images' />
          <h3 className='card-title'>{data.name}</h3>
          <span className='card-start'>{data.start}</span>
        </div>
        <div className='card-back'>
          <button className='explore-button'>Explore</button>
          <button className='buy-button'>Buy</button>
        </div>
      </div>
    </div>
  );
}
