import React, { Component } from "react";
import './About.css'
import ResumeAbout from "./resume-components/ResumeAbout";

class About extends Component {

  constructor(){
    super()

    this.state = {
    
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        linkedIn:'',
      
    }
  }
  handleFirstNameChange = (e) =>{
    this.setState({
      firstName : e.target.value,
    })
  }

  handleLastNameChange = (e) =>{
    this.setState({
      lastName : e.target.value,
    })
  }

  handleEmailChange = (e) =>{
    this.setState({
      email : e.target.value,
    })
  }

  handlePhoneChange = (e) =>{
    this.setState({
      phone : e.target.value,
    })
  }

  handleLinkedInChange = (e) =>{
    this.setState({
      linkedIn : e.target.value,
    })
  }

  onSubmitForm = (e) =>{
    e.preventDefault();
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.email)
    console.log(this.state.phone)
    console.log(this.state.linkedIn)

  }

  render() {
    return (
      <div className="About-form-div">
        <h1>About You</h1>
        <form className="About-form" onSubmit={this.onSubmitForm}>
          <div className="About-input">
            <input type="text" 
                   placeholder="First Name"
                   onChange={this.handleFirstNameChange}/>

            <input type="text" 
                   placeholder="Last Name" 
                   onChange={this.handleLastNameChange}/>

            <input type="email" 
                   placeholder="you@email.com"
                   onChange={this.handleEmailChange}/>

            <input type="tel" 
                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                   placeholder="000-000-0000"
                   onChange={this.handlePhoneChange}/>

            <input type="text" 
                   placeholder="LinkedIn"
                   onChange={this.handleLinkedInChange}/>
          </div>
          <button type="submit">Submit!</button>
        </form>
        <ResumeAbout firstName={this.state.firstName}/>
      </div>
    )
  }
}

export default About;