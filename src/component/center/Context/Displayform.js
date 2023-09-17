import React, { useContext } from 'react';
import './Display.css';
import { Link } from 'react-router-dom';
import ProfileContext from './Profile';

export default function Displayform() {
  const { name, date, fathername, school, month, image, year, Class, Ambition, contact, bio } = useContext(ProfileContext);

  return (
    <div className='student-info-container'>
      <div className='photo'>
        {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className='profile-image' />}
      </div>
      <div className='info-data'>
        <div className='info'>
          <span className='info-label'>Name</span>: <h3>{name}</h3>
        </div>
        <div className='info'>
          <span className='info-label'>Father's Name</span>: <h3>Mr. {fathername}</h3>
        </div>
        <div className='info'>
          <span className='info-label'>Class</span>: <h3>{Class}</h3>
        </div>
        <div className='info'>
          <span className='info-label'>Date of Birth</span>: <h3>{date}-{month}-{year}</h3>
        </div>
        <div className='info'>
          <span className='info-label'>Ambition</span>: <h3>{Ambition}</h3>
        </div>
        <div className='info'>
          <span className='info-label'>School Name</span>: <h3>{school}</h3>
        </div>
        <div className='info'>
          <span className='info-label'>Contact</span>: <h3>+91 <span>{contact}</span></h3>
        </div>
        <div className='info'>
          <span className='info-label'>Bio</span>: <p>{bio}</p>
        </div>
        <Link to="/editprofile">
          <button className='edit-button'>Update</button>
        </Link>
      </div>
    </div>
  );
}
