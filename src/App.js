class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      birthDate: "",
      agree: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
            <input type = "date" className = "birthdate" placeholder = "YYYY-MM-DD" data-date-split-input = "true" />
          </div>
          <div className = "form-group">
            <label htmlFor = "agree">I agree to be contacted by email</label>
            <input type = "checkbox" className = "agree" checked = {this.state.agree} onChange = {this.onAgreeChange.bind(this)} />
          </div>
          <input type = "submit" value = "Submit" />
        </form>
      </div>
    )
  }




}
