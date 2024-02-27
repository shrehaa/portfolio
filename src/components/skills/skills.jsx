import './skills.scss'
import React from 'react'

const skills =[{
    name: "ReactJS", 
    description : "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context."
    },
   {
    name: "JavaScript", 
    description : "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interface."
   },
   {
    name: "HTML", 
    description : "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users."
   },
   {
    name: "CSS", 
    description : "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience."
   },
   {
    name: "NodeJS", 
    description : "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications."
   }]

const Skills = () => {
  return (
    <div className='servicecontainer'>
        <div className='text'>
            <p>Learner &gt; Developer</p>
            <hr/>
        </div>
        <div className='title'>
           <h2>My skills</h2> 
            <h1>Technologies</h1>
        </div>
        <div className='list'>
            {skills.map((x)=>{
                return(
                    <div className="box">
                        <h2>{x.name}</h2>
                        <p>{x.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills