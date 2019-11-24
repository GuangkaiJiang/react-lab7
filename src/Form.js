import React from 'react'
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          age:18,
          name:'',
          email:'',
          parentName:'',
          parentPhoneNo:'',
          formErrors:{email:'',phone:''},
          emailValid: false,
          phoneValid: false,

    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.validateField=this.validateField.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        },() => { this.validateField(name, value) });
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
    validateField(fieldName, value) {
        let formErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            formErrors.email = emailValid ? '' : 'Email is invalid';
            break;
           case 'parentPhoneNo':
            phoneValid = value.match(/^\d{9}$/);
            formErrors.phone = phoneValid ? '' : 'Phone number is invalid';
            break;
          default:
            break;
        }
        this.setState({formErrors: formErrors,
                        emailValid: emailValid
                      }, this.validateForm);
      }

    render() {
      return (
          
        <form onSubmit={this.handleSubmit}>
          <label>
          age:
            <input  name="age" type="number" value={this.state.age} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
          {this.state.age>=18?"Name":"Parent Name" }
            <input name={this.state.age>=18?"name":"parentName" } type="text" value={this.state.age>=18?this.state.name:this.state.parentName} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
          {this.state.age>=18?"Email":"Parent Phone No" }
            <input name={this.state.age>=18?"email":"parentPhoneNo" } type="text" value={this.state.age>=18?this.state.emaiil:this.state.parentPhoneNo} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <div className="panel panel-default">
          {this.state.age>=18?this.state.formErrors.email:this.state.formErrors.phone}
        </div>
        </form>
      );
    }
  }
  export default Form