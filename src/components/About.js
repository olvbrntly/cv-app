import React, { Component } from "react";
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="About-form-div">
        <h1>About You</h1>
        <form className="About-form">
          <div className="About-input">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="email" placeholder="you@email.com"/>
            <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="000-000-0000"/>
            <input type="text" placeholder="LinkedIn"/>
          </div>
          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
}

export default About;