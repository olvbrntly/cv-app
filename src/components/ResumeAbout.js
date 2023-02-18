import React, { Component } from "react";

class ResumeAbout extends Component{
    render(){
     const { about } = this.props
    return(
    <div>
        <div>Welcome to the resume about section!</div>
        <div> First name : {about.firstName} </div>
        <div> Last name: {about.lastName}</div>
        <div> Email: {about.email}</div>
        <div> Phone Number: {about.phone}</div>
        <div> LinkedIn: {about.linkedIn}</div>

        
    </div>
    )
    }
}

export default ResumeAbout