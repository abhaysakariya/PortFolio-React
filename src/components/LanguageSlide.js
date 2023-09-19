import React, {useEffect} from 'react'
import '../App.css';


export default function LanguageSlide() {
  useEffect(() => {
    let scrollContainer = document.getElementById("Language-container");
    scrollContainer.addEventListener("wheel",(e) => {
      e.preventDefault();
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += e.deltaY;
    });
  }, []);
  
 
  return (
    <div className='Language-container' id='Language-container'>
        <div className="FirstSlide" id='FirstSlide'>
            <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>PYTHON</li>
                <li>REACT JS</li>
                <li>JAVASCRIPT</li>
                <li>JQUERY</li>
                <li>BOOTSTRAP</li>
            </ul>
        </div>
        <div className="justScrollIcon">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right"/>
        </div>
        <div className="SecondSlide" id='SecondSlide'>
            <ul>
                <li>Computer Hardware</li>
                <li>Networking</li>
                <li>Cloud</li>
                <li>Ethical Hacking</li>
                <li>Cyber security</li>
                <li>linux</li>
            </ul>
        </div>
    </div>

  )
}
