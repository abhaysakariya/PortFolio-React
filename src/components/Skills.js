import React from 'react'
import "../App.css";


export default function Skills() {
    const title = "<Skills />";
    const skillsName = {
        "HTML5":"ADVANCED!",
        "CSS3":"ADVANCED!",
        "JAVASCRIPT":"INTERMEDIATE!",
        "PYTHON":"ADVANCED!",
        "C LANGUAGE":"ADVANCED!"
    };

    const frameworkName = {
        "REACT JS":"BEGINNER!",
        "DJANGO":"BEGINNER!",
        "FLASK":"BEGINNER!",
        "BOOTSTRAP":"INTERMEDIATE!",
        "JQUERY":"BEGINNER!"
    };
  return (
   <>
        <div className="base-container">
            <div className="justify-left-base">
                <div className="base-title">
                    <ul>
                        <li>{title}</li>
                    </ul>
                </div>
                <div className="showSkills">
                    <div className="showSkills-title">
                        Languages i Speak:
                    </div>
                    <div className="skillsName-container">
                    {Object.keys(skillsName).map((ele) => {
                        return <div className="skillsName-Tab" key={ele}>
                            <div className="skilltitle">{ele}</div>
                            <div className="skilltag">{skillsName[ele]}</div>
                        </div>
                    })}
                    </div>
                </div>
                <div className="showSkills">
                    <div className="showSkills-title">
                        Frameworks i Learn:
                    </div>
                    <div className="skillsName-container">
                    {Object.keys(frameworkName).map((ele) => {
                        return <div className="skillsName-Tab" key={ele}>
                            <div className="skilltitle">{ele}</div>
                            <div className="skilltag">{frameworkName[ele]}</div>
                        </div>
                    })}
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}
