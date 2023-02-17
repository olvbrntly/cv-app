import React, { Component } from "react";
import './Experience.css'


class Experience extends Component {
  render() {
    return (
      <div className="Experience-form-div">
        <h1> Your Experience</h1>
        <form className="Experience-form">
          <div className="Experience-input">
            <input type="text" placeholder=" Job Title"/>
            <input type="text" placeholder="Company"/>
            <input type="text" placeholder="Location"/>
            <input type="text" placeholder="Start Date"/>
            <input type="text" placeholder="End Date"/>
            <textarea placeholder="Description"/>

          </div>
          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
}

export default Experience;