import React from 'react'
class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    }

  }
  componentDidMount() {
    fetch('http://localhost:3004/employees')
      .then(response => response.json())
      .then(data => this.setState({ employees: data }))
  }

  render() {
    return (
      <div>
        <h1>Employees</h1>
         {<>{this.state.employees.map(employees=><ul key={employees.id} style={employees.isActive ? {color: "green"}: {color: "grey"}} >{employees.name+"  "+employees.age}</ul>)}</>}
      </div>
    )
  }
}

export default Employees