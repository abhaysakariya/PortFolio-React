import React from 'react';
import '../App.css';
import LanguageSlide from './LanguageSlide';

export default function FirstTab() {
  return (
    <div className="container">
        <div className="firstTab">
          <div className="half-container">
            <div className="justify-left">
              <div className="Name">Abhay Sakariya</div>
              <div className="Description"><div className="desc">Passenger through space and time, front-end web builder & bittersweet songs enthusiast</div></div>
            </div>
          </div>
            <LanguageSlide/>
        </div>
    </div>
  )
}
