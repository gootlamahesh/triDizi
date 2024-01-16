import { Component } from "react";
import { v4 as uuidV4 } from "uuid";
import EmItem from "./components/EmItem";

import "./App.css";

function getEmployeeListFromLocalStorage() {
  const stringifiedEmployeeList = localStorage.getItem("EmployeeList");
  const employeeList = JSON.parse(stringifiedEmployeeList);
  if (employeeList === null) {
    return [];
  }
  return employeeList;
}

const initialEmployeeList = getEmployeeListFromLocalStorage();

class App extends Component {
  state = {
    name: "",
    age: 0,
    experience: 0,
    skills: "",
    doj: "",
    imageUrl: "",
    salary: 0,
    employeeList: initialEmployeeList,
  };

  onAddEmployee = (e) => {
    e.preventDefault();
    const {
      name,
      age,
      experience,
      skills,
      doj,
      imageUrl,
      salary,
      employeeList,
    } = this.state;
    const newEmployee = {
      id: uuidV4(),
      name: name,
      age: age,
      experience: experience,
      skills: skills,
      doj: doj,
      imageUrl: imageUrl,
      salary: salary,
    };

    const newList = [...employeeList, newEmployee];
    this.setState({ employeeList: newList });
    const parsed = JSON.stringify(newList);
    localStorage.setItem("EmployeeList", parsed);
    console.log(newList);
  };

  onName = (e) => {
    this.setState({ name: e.target.value });
  };

  onAge = (e) => {
    this.setState({ age: e.target.value });
  };

  onExperience = (e) => {
    this.setState({ experience: e.target.value });
  };

  onSkills = (e) => {
    this.setState({ skills: e.target.value });
  };

  onDoj = (e) => {
    this.setState({ doj: e.target.value });
  };

  onImage = (e) => {
    this.setState({ imageUrl: e.target.value });
  };

  onSalary = (e) => {
    this.setState({ salary: e.target.value });
  };

  onDelete = (id) => {
    //  console.log(id);
    const { employeeList } = this.state;
    const newList = employeeList.filter((each) => each.id !== id);
    this.setState({ employeeList: newList });
    const parsed = JSON.stringify(newList);
    localStorage.setItem("EmployeeList", parsed);
  };

  onUpdate = (id) => {
    const name = prompt("Enter New Full Name");
    console.log(id, name);
    const { employeeList } = this.state;
    const newList = employeeList.map((each) => {
      if (each.id === id) {
        return { ...each, name: name };
      } else {
        return each;
      }
    });
    this.setState({ employeeList: newList });
    const parsed = JSON.stringify(newList);
    localStorage.setItem("EmployeeList", parsed);
  };

  render() {
    const {
      name,
      age,
      experience,
      skills,
      doj,
      imageUrl,
      salary,
      employeeList,
    } = this.state;
    return (
      <div className="bg-container">
        <h1 style={{ textAlign: "center" }}>Register Employee</h1>
        <form onSubmit={this.onAddEmployee} className="form-data">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              onChange={this.onName}
              value={name}
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              onChange={this.onAge}
              value={age}
              required
            />
          </div>
          <div>
            <label htmlFor="experience">Experience</label>
            <input
              type="number"
              id="experience"
              onChange={this.onExperience}
              value={experience}
            />
          </div>
          <div>
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              id="skills"
              onChange={this.onSkills}
              value={skills}
              required
            />
          </div>
          <div>
            <label htmlFor="doj">Date Of Joining</label>
            <input
              type="date"
              id="doj"
              onChange={this.onDoj}
              value={doj}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Upload Image URL</label>
            <input
              type="text"
              id="image"
              onChange={this.onImage}
              value={imageUrl}
              required
            />
          </div>
          <div>
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              id="salary"
              onChange={this.onSalary}
              value={salary}
            />
          </div>
          <button type="submit">Add Details</button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            width: "100vw",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Employee's Data</h1>

          <table>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Experience</th>
              <th>Skills</th>
              <th>DOJ</th>
              <th>Photography</th>
              <th>Salary</th>
              <th>Deletion</th>
              <th>Update</th>
            </tr>
            {employeeList.map((eachEmployee) => (
              <EmItem
                key={eachEmployee.id}
                details={eachEmployee}
                onUpdate={this.onUpdate}
                onDelete={this.onDelete}
              />
            ))}
          </table>
        </div>
      </div>
    );
  }
}
export default App;
