// Nevbar.js

import React, { useContext, useState, useEffect } from 'react';
import './Nevbar.css';
import CourseSelection from './component/CourseSelection';
import { Link } from 'react-router-dom';
import ProfileContext from './component/center/Context/Profile';

export default function Nevbar() {
  const { image, name, stream } = useContext(ProfileContext);
  const [photo, setPhoto] = useState('https://tse1.mm.bing.net/th?id=OIP.cxcqa9RvhGnRd8x3N2oBdgHaHn&pid=Api&P=0&h=180');
  
  useEffect(() => {
    if (image) {
      setPhoto(URL.createObjectURL(image));
    }
  }, [image]);
 
  return (
    <div className='nev-bar'>
      <div className='logo'>Educonnect</div>
      <div className='header-center'>
        <div className='course'>
          <Link to="/select">Course - {stream}</Link>
        </div>
        <div className='refer'>
          <a href="#">Refer & Earn</a>
        </div>
      </div>
      <div className='profile'>
        Hello, {name}{' '}
        <Link to="/profile">
          <img src={photo} alt="Uploaded" height={25} width={25} />
        </Link>
      </div>
    </div>
  );
}
