import React from 'react';
import "../App.css";

export default function AboutMe() {
    const title = "<About Me />";
  return (
    <>
        <div className="base-container">
            <div className="justify-left-base">
                <div className="base-title">
                    <ul>
                        <li>{title}</li>
                    </ul>
                </div>
                <div className="aboutme-desc">
                My name is Abhay Sakariya, and I am a web developer with a passion for React and Python. I am also skilled in other languages and technologies, such as JavaScript, HTML, CSS, and More. I have experience in building a variety of web applications, from simple websites to complex e-commerce platforms.
                <br /><br />
                I am passionate about creating user-friendly and efficient web applications. I believe that the best web applications are those that are easy to use and navigate, and that provide users with a valuable experience. I am also committed to writing clean and well-organized code, so that my applications are easy to maintain and update.
                <br /><br />
                I am a highly motivated and results-oriented individual. I am always looking for new challenges and opportunities to learn and grow. I am also a team player and I am always willing to help others.
                </div>
            </div>
        </div>
    </>
  )
}
