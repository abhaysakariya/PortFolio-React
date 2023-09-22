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
              <div className="Description"><div className="desc">Web Developer | Ready To Build user-friendly and efficient web applications</div></div>
            </div>
          </div>
            <LanguageSlide/>
        </div>
    </div>
  )
}
