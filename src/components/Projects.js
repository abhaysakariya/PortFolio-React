import React from 'react'

export default function Projects() {
    const title = "<Projects />"
  return (
    <>
        <div className="base-container">
            <div className="justify-left-base">
                <div className="base-title">
                    <ul>
                        <li>{title}</li>
                    </ul>
                </div>
                <div className="projects-container">
                    <div className="project-card"></div>
                </div>
            </div>    
        </div>
    </>
  )
}
