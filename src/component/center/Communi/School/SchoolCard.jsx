import React from 'react';
import './Schoolcard.css';

export default function SchoolCard({ data }) {
  return (
    <div className='school-card'>
      <div className='card-innerb'>
        <div className='card-frontb'>
          <img src={data.image} className='school-image' alt='School' />
          <span className='school-name'>{data.name}</span>
        </div>
        <div className='card-backb'>
          <span className='school-date'>{data.date}</span>
          <div className='school-buttons'>
            <button className='visit-button'>Visit</button>
            <button className='admission-button'>Admission</button>
          </div>
        </div>
      </div>
    </div>
  );
}

