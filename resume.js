import React, { useState } from 'react';
import ResumeData from './resumedata';

function ResumeBuilder  () 
{

    const { name,image,phone,location,summary,email,skills,softskills,projects,languages, education, experience } = ResumeData;
    const mailToUrl=`mailTo:${email}`;

  return (
    <>
    <h1 style={{textAlign:'center'}} >My Resume</h1>
    <div bp='grid' className='maindiv'>
      <div bp='7' className="leftdiv"> 
            <span style={{fontSize:"200%",fontWeight:"600"}}>{name}</span><br/>
            <span>{summary}</span><br/>
            <span className='bi bi-envelope-at-fill' ></span> <a style={{textDecoration:"none"}} href={mailToUrl} className='contactSpan'>{email}</a>&nbsp;&nbsp;&nbsp;
            <span className='bi bi-telephone-fill' ></span> <span className='contactSpan'>{phone}</span>&nbsp;&nbsp;&nbsp;
            <span className='bi bi-geo-alt-fill'></span> <span className='contactSpan'>{location}</span><br/><br/>
            
            <div>
            <p className='underline'><span className="heading">EDUCATION</span></p>
            {education.map(item => (
                <div key={item.id} className="objectdiv">
                <span className='primary-line'>{item.qualification}</span><br/>
                <span className='secondary-line'>{item.school}</span><br/>
                <span className='tertiary-line bi-calendar-range-fill'> </span>&nbsp; <span className='tertiary-line'>{item.graduation}</span>
                <span className='tertiary-line' style={{float:"right"}}>{item.result}</span><br/>
                </div>
            ))}
            </div>
            
            <div>
            <p className='underline'><span className="heading">PROJECTS</span></p>
            {projects.map(item=>(
                <div key={item.id} className="objectdiv">
                    <span className='primary-line'>{item.title}</span><br/>
                    <span className='secondary-line'>{item.technology}</span><br/>
                    <span className='tertiary-line'>{item.description}</span><br/>
                </div>
            ))}
            </div>
          
            <div className="innerDiv">
            <p className='underline'><span className="heading">SKILLS</span></p>
            <div style={{marginBottom:"5px"}}></div>
            {skills.map(item =>(
                <span className='skills'>{item}</span>
            ))}
            </div>
            

        </div>

        <div bp='5' className="rightdiv">
            
            <img src={image}></img><br/><br/> 
            
            <div>
            <p className='underline'><span className="heading">EXPERIENCE</span></p>
            {experience.map(item => (
                <div key={item.id} className="objectdiv">
                <span className='primary-line'>{item.title}</span><br/>
                <span className='secondary-line'>{item.company}</span><br/>
                <span className='tertiary-line bi-calendar-range-fill'></span>&nbsp;&nbsp;
                <span className='tertiary-line'>{item.startDate} - {item.endDate}</span>
                <ul>
                    {item.responsibilities.map(resp => (
                    <li key={resp}>{resp}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>            

            <div>
            <p className='underline'><span className="heading">LANGUAGES</span></p>
            <ul>
            {languages.map(item=>(
                <li>{item}</li>
            ))}
            </ul>
            </div>

            <div>
            <p className='underline'><span className="heading">SOFT SKILLS</span></p>
            <ul>
            {softskills.map(item=>(
                <li>{item}</li>
            ))}
            </ul>
            </div>
        </div>
      
    </div>
    </>
  );

}

export default ResumeBuilder;


