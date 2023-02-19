import React, { Component } from "react";
import './styles/ResumeAbout.css'

class ResumeAbout extends Component{
    render(){
     const { about } = this.props
    return(
    <div className="resume-personal-info">
        <div className="full-name">
            <div className="f-name-resume">{about.firstName} </div>
            <div className="l-name-resume">{about.lastName}</div>
        </div>

        <div className="bar-deco"> </div>

        <div className="info">
            <div className="email-resume">&#x2022; {about.email}  </div>
            <div className="phone-number-resume">&#x2022; {about.phone}</div>
            <div className="linkedin-resume">&#x2022; {about.linkedIn}</div>
        </div>
        
    </div>
    )
    }
}

export default ResumeAbout