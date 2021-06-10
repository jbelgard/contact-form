import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      birthDate: "",
      agree: true
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent, Thank you!");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message Failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({name: '', email: '', birthDate: '', agree: false})
  }

  render() {
    return(
      <div className = "App">
        <form id = "contact-form" onSubmit = {this.handleSubmit.bind(this)} method = "POST">
          <div className = "form-group">
            <label htmlFor = "name">Name</label>
            <input type = "text" className = "form-control" value = {this.state.name} onChange = {this.onNameChange.bind(this)} />
          </div>
          <div className = "form-group">
            <label htmlFor = "exampleInputEmail1">Email</label>
            <input type = "email" className = "form-control" aria-describedby = "emailHelp" value = {this.state.email} onChange = {this.onEmailChange.bind(this)} />
          </div>
          <div className = "form-group">
            <label htmlFor = "birthDate">Birth Date</label>
            <input type = "date" className = "birthdate" placeholder = "YYYY-MM-DD" data-date-split-input = "true" value = {this.state.birthDate} onChange = {this.onBirthChange.bind(this)} />
          </div>
          <div className = "form-group">
            <label htmlFor = "agree">I agree to be contacted by email</label>
            <input type = "checkbox" className = "agree" checked = {this.state.agree} onChange = {this.onAgreeChange.bind(this)} />
          </div>
          <button type = "reset" className = "btn btn-secondary">Clear</button>
          <button type = "submit" className = "btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onBirthChange(event) {
    this.setState({birthDate: event.target.value})
  }

  onAgreeChange(event) {
    this.setState({agree: event.target.value})
  }

  handleSubmit(event) {

  }




}

export default App;
