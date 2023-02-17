import React, { Component } from "react";
import ResumeAbout from "./resume-components/ResumeAbout";

class Resume extends Component {
  render() {
    return (
      <div className="resume-div">
        <p>This is the Resume</p>
        <ResumeAbout />
      </div>
    )
  }
}

export default Resume

//resume div
    //header div
    //body div
        //education div
        //experience div
    //footer div(skills)