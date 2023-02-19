import React, { Component } from "react";
import './styles/About.css'

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

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]:value
    })
  }

  onSubmitForm = (e) =>{
    const {firstName, lastName, email, phone, linkedIn } = this.state
    this.props.aboutParentCallback(firstName, lastName, email, phone, linkedIn);
    e.preventDefault();
  }

  render() {
    return (
      <div className="About-form-div">
        <h1>About You</h1>
        <form className="About-form" onSubmit={this.onSubmitForm}>
          <div className="About-input">
            <input type="text" 
                   placeholder="First Name"
                   name="firstName"
                   value={this.state.firstName}
                   onChange={this.handleChange}/>

            <input type="text" 
                   placeholder="Last Name" 
                   name="lastName"
                   value={this.state.lastName}
                   onChange={this.handleChange}/>

            <input type="email" 
                   placeholder="you@email.com"
                   name="email"
                   value={this.state.email}
                   onChange={this.handleChange}/>

            <input type="tel" 
                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                   placeholder="000-000-0000"
                   name="phone"
                   value={this.state.phone}
                   onChange={this.handleChange}/>

            <input type="text" 
                   placeholder="LinkedIn"
                   name="linkedIn"
                   value={this.state.linkedIn}
                   onChange={this.handleChange}/>
          </div>
          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
}

export default About;