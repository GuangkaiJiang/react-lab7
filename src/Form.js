import React from 'react'
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          age:18,
          name:'',
          email:'',
          parentName:'',
          parentPhoneNo:''

    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
      event.preventDefault();
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
            <input name={this.state.age>=18?"name":"parentName" } type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
          {this.state.age>=18?"Email":"Parent Phone No" }
            <input name={this.state.age>=18?"email":"parentPhoneNo" } type="text" value={this.state.emaiil} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Form