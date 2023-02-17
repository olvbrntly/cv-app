import React, { Component } from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Resume from "./Resume";

class Main extends Component{

    constructor(){
      super()

      this.state = {
        about:{
          firstName:'',
          lastName:'',
          email:'',
          phone:'',
          linkedIn:'',
        },
        education:{
          institution:'',

        },
        experience:{
          title:'',
        }

      
    }
    }
    render(){
        return(
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

export default Main