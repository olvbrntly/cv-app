import React, { Component } from "react";
import './styles/Experience.css'


class Experience extends Component {

  constructor(){
    super()

    this.state = {
      jobTitle:'',
      company:'',
      location:'',
      startDate:'',
      endDate:'',
      description:'',
      experiences:[]
  };
}

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name] : value

    });

  };

  onSubmitForm = (e) =>{
    const {jobTitle,company,location,startDate,endDate,description,experiences} = this.state
      this.props.experienceParentCallback(jobTitle,company,location,startDate,endDate,description);
      this.props.pushToExperienceArray(experiences);
      e.preventDefault();
    };


  render() {
    return (
      <div className="Experience-form-div">
        <h1> Your Experience</h1>
        <form className="Experience-form" >
          <div className="Experience-input">
            <input type="text" 
                   placeholder=" Job Title"
                   name="jobTitle"
                   value={this.state.jobTitle}
                   onChange={this.handleChange}/>
            <input type="text" 
                   placeholder="Company"
                   name="company"
                   value={this.state.company}
                   onChange={this.handleChange}/>
            <input type="text" 
                   placeholder="Location"
                   name="location"
                   onChange={this.handleChange}/>
            <input type="text" 
                   placeholder="Start Date"
                   name="startDate"
                   onChange={this.handleChange}/>
            <input type="text" 
                   placeholder="End Date"
                   name="endDate"
                   onChange={this.handleChange}/>
            <textarea placeholder="Description"
                      name="Description"
                      onChange={this.handleChange}/>

          </div>
          <button type="submit" onClick={this.onSubmitForm}>Submit!</button>
        </form>
      </div>
    )
  }

}
export default Experience;