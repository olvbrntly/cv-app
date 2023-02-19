import React, { Component } from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import ResumeAbout from "./ResumeAbout";
import ResumeExperience from "./ResumeExperience";
import './styles/ResumeAbout.css'

class Main extends Component{

    constructor(){
      super()

      this.state = {
         about:{
          firstName:'FIRST NAME -',
          lastName:'LAST NAME',
          email:'EMAIL',
          phone:'000-000-0000',
          linkedIn:'linkedIn',
         },
         experience:{
          jobTitle:'',
          company:'',
          location:'',
          startDate:'',
          endDate:'',
          description:'',
        } ,
        // education:{
        //   institution:'',

        // },
        experiences:[],
    }

    }

    handleAboutCallback = ( fname, lname, email,phone, linkedIn) => {
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


    handleExperienceCallback = (jobTitle,company,location,startDate,endDate,description) => {
      this.setState({
           experience:{
            jobTitle:jobTitle,
            company:company,
            location:location,
            startDate:startDate,
            endDate:endDate,
            description:description,
           }
    }) 
    };

      pushToExperienceArray = () =>{
        this.setState({
          experiences: this.state.experiences.concat(this.state.experience),
          experience:{
                jobTitle:'',
                company:'',
                location:'',
                startDate:'',
                endDate:'',
                description:'',
            },
        }, ()=>{
          console.log(this.state.experiences)
        })
      }
    // experience:{
        //     jobTitle:jobTitle,
        //     company:company,
        //     location:location,
        //     startDate:startDate,
        //     endDate:endDate,
        //     description:description,
        // },
    
    
      // }, () => {
      //   console.log(this.state.experiences)
      // }
  

  render(){
      
        return(
            <div className="full-app">
            <div className="left-app">
              <h1>Resume Generator</h1>
              <About aboutParentCallback = {this.handleAboutCallback} />
              <Experience experienceParentCallback={this.handleExperienceCallback} pushToExperienceArray={this.pushToExperienceArray}/>
              <Education/> 
            </div>
            <div className="right-app">
              <div className="resume-about-div">
                <ResumeAbout about = {this.state.about}/>
              </div>
              <div>
                <ResumeExperience experience = {this.state.experiences}/>
              </div>

            </div>
          </div>
        )
    }
}

export default Main