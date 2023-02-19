import React, { Component } from "react";
import './styles/ResumeExperience.css'


class ResumeExperience extends Component{

    render(){
        const {experiences} = this.props
    return(
    <div>
        <div className="experience-title">Experience</div>
        <div>
            {experiences}
        </div>
        
    </div>
    )
    }
}

export default ResumeExperience