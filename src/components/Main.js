import React, { Component } from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import ResumeAbout from "./ResumeAbout";


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
        // education:{
        //   institution:'',

        // },
        // experience:{
        //   title:'',
        // } 
    }

    }

    handleCallback = ( fname, lname, email,phone, linkedIn) => {
      this.setState({
          about:{
            firstName: fname,
            lastName: lname,
            email: email,
            phone:phone,
            linkedIn: linkedIn,
          }

        });
      
    }
  render(){
      
        return(
            <div className="full-app">
            <div className="left-app">
              <h1>Resume Generator</h1>
              <About parentCallback = {this.handleCallback} />
              <Experience/>
              <Education/> 
            </div>
            <div className="right-app">
              <ResumeAbout about = {this.state.about}/>

            </div>
          </div>
        )
    }
}

export default Main