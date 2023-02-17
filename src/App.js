
import React, { Component } from "react";
import About from './components/About'
import Experience from "./components/Experience";
import Education from "./components/Education";
import Resume from "./components/Resume";

import "./App.css"

class App extends Component {
  render() {
    return (
    <div className="full-app">
      <div className="left-app">
        <h1>Resume Generator</h1>
        <About/>
        <Experience/>
        <Education/> 
      </div>
      <div className="right-app">
        <Resume/>
      </div>
    </div>
    )
  }
}

export default App;