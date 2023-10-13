import React from 'react'

export default function Projects() {
    const title = "<Projects />";

    const projectDetails = [
        {"title":"ScrapA",
         "desc":"This Is An Usefull Tool For The Web Scraper Who Are Bored Of Writing Code For Different Websites To Scrap The Data Init. ScrapA DO This Task For You Easily Just You Have To Write Few Lines Of Code And Sometime Only One Line Of Code Also....This Will Also Take Care Of File Management And Make File Input / Output Easy For You.... Want To Know How?? Get Started With Me.",
         "after":"After Completing This Project I'm able to work with Python Classes And Objects And How Pypi Works and How To Deal With Python Packages And Modules.",
"url":"https://github.com/abhaysakariya/ScrapA","languageused":["PYTHON"]},
        {"title":"SpaceProgram.ai",
        "desc":"This is an AI created using html css javascript and this AI will answer the Question asked to him related to programming field. ",
        "after":"After Completing This Project I'm able To work with Javascript Fetch API and json File in Javascript",
        "url":"https://github.com/abhaysakariya/SpaceProgram.ai",
        "languageused":["HTML","CSS","JAVASCRIPT","JSON"]},
        {"title":"ExpenseTracker ",
        "desc":"This Website Help You Track Your Expenses On Incomes,And Also In built Calculator Help You Calculate , And An Todoapp To Add The ToDos You Are Going To Do. ",
        "after":"After Creating This Project Im Able To work Fluently With Javascript library jquery for animation and bootstrap for Design Purpose.",
        "url":"https://github.com/abhaysakariya/ExpenseTracker",
        "languageused":["HTML","CSS","JAVASCRIPT","JQUERY"]},
        {"title":"Personal Portfolio",
        "desc":"I have created an personal Portfolio webpage Contains My CV Details likes My Profile Skills AboutME Projects And Contact Form. Simple And Responsive Portfolio Design.This Is My 1st Project For Using Only Custom CSS. ",
        "after":"After Creating This Project Im Able To work Fluently With Css properties and custom CSS And HTML",
        "url":"https://github.com/abhaysakariya/portfolio",
        "languageused":["HTML","CSS","JAVASCRIPT"]},
        {"title":"IPV4_Convert ",
        "desc":"Using This Program You Can Convert Binary To Decimal And Decimal To Binary For Networking IPV4.This I Created For Networker Who Are Studying Networking And Want To Convert Between Types. ",
        "after":"After Completing this project I'm able to work With Python Object based Programming using Class and Functions.",
        "url":"https://github.com/abhaysakariya/IPV4_Convert",
        "languageused":["PYTHON"]},
        {"title":"CodeSaveShare  ",
        "desc":"I have created clone website of 'Ray.so' in terms of Functionality like you can code live in your browser in 3 different languages :- HTML,CSS,JAVASCRIPT, and share the code images directly to your friends or calligues. ",
        "after":"After Completing this project i have learned 2 new Javascript library namely : Ace.js and Dom-to-image which helps me complete this project.",
        "url":"https://github.com/abhaysakariya/CodeSaveShare",
        "languageused":["HTML","CSS","JAVASCRIPT"]}
    ];

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
                    {projectDetails.map((ele)=>{
                        return <div className="project-card" key={ele.desc}>
                        <div className="project-card-title"><a href={ele.url}>{ele.title}</a></div>
                        <div className="project-card-desc">{ele.desc}<span>{ele.after}</span></div>
                        <div className="used-language-div">
                            {ele.languageused.map((e)=>{
                                return <div className="languagename" languagename={e} key={e}>{e}</div>
                            })}
                            
                        </div>
                    </div>
                    })}
                </div>
            </div>    
        </div>
    </>
  )
}
