import React from 'react';
import './Home.css';
import studentimage from './studentimage.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <div className='Home'>
      <Carousel>
        <div>
        <span>learn</span>
          <img src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&uid=R104988947&ga=GA1.2.2065714623.1686555634&semt=ais" alt="" />
        </div>
        <div>
        <span>Play</span>
          <img src="https://img.freepik.com/free-vector/after-school-activities-children-social-media-promo-template_23-2149662940.jpg?size=626&ext=jpg&uid=R104988947&ga=GA1.2.2065714623.1686555634&semt=sph" alt=""  />
        </div>
        <div>
        <h3>Communicate</h3>
            <img src="https://img.freepik.com/premium-photo/abstract-background-creative-collaborationshare-their-opinions-until-conclusion-is-reached3d-rendering_537132-930.jpg?size=626&ext=jpg&uid=R104988947&ga=GA1.2.2065714623.1686555634&semt=sph" alt="" />
        </div>
      </Carousel>
      <div className="blur" ></div>
      <div className="blur1"></div>
      <div className="quote">
        <span>Lets Connect</span>
        <br />
        <h1>Indian education</h1>
        
      </div>
      
    </div>
  );
}

