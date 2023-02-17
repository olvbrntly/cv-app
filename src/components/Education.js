import React, { Component } from "react";
import './Education.css'


class Education extends Component {
  render() {
    return (
      <div className="Education-form-div">
        <h1> Your Education</h1>
        <form className="Education-form">
          <div className="Education-input">
            <input type="text" placeholder="Institution"/>
            <input type="text" placeholder="Location"/>
            <input type="text" placeholder="Degree Type"/>
            <input type="text" placeholder="Degree Field"/>
            <input type="text" placeholder="Status"/>
            <input type="text" placeholder="Start Date"/>
            <input type="text" placeholder="End Date"/>
          </div>
          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
}

export default Education;