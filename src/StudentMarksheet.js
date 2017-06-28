import React from 'react';
import StudentsDetails from './StudentsDetails.js';
import './App.css';
import SearchBox from './Search.js';
import Checkbox from './Checkbox.js';
import Filters from './Filters';
import test from './test';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class StudentMarksheet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      studentData: []
    };
  }

  handleClick(event) {
    event.preventDefault();
    <Route component={test} path='/test' />
  }

  displayResult(studentDetails){

    let rows = [];
    let total = [];
    let percentage = [];
    var font = [];

    for (var i = 0; i< studentDetails.results.length; i++) {
      total[i] = studentDetails.results[i].marks.english +
              studentDetails.results[i].marks.hindi +
              studentDetails.results[i].marks.mathematics

    percentage[i] = (total[i]/3).toFixed(2);
    if(percentage[i] < 35){
      font[i] = "red";
    }

    rows.push(<tr key={i} style={{color: font[i] }}>
      <td>{studentDetails.results[i].firstName}</td>
      <td onClick={this.handleClick.bind(studentDetails.results[i])}>{studentDetails.results[i].lastName}</td>
      <td>{percentage[i]}</td>
      </tr>)
    }

    this.setState({studentData : rows});
  }

  componentWillMount(){
    var studentDetails = StudentsDetails;
    this.displayResult(studentDetails);
  }

  getFilters(categories){

    var checkboxes = [];
    for (var i = 0; i < categories.categories.length; i++) {
      checkboxes.push(<Checkbox selectedCheckbox={this.selectedCheckbox.bind(this)} key={i}
      label={categories.categories[i][i+1]}/>)
    }
    return checkboxes;
  }

  selectedCheckbox(filter){

    var filteredData = [];

    if(filter === 'Distinction'){
      filteredData = this.StudentsFilterData(filteredData,60,100);
    }

    if(filter === 'First Class'){
      filteredData = this.StudentsFilterData(filteredData,50,60);
    }

    if(filter === 'Second Class'){
      filteredData = this.StudentsFilterData(filteredData,35,50);
    }

    if(filter === 'Fail'){
      filteredData = this.StudentsFilterData(filteredData,0,35);
    }

    var filteredStudentsData = {results:filteredData};
    this.displayResult(filteredStudentsData);
  }

  StudentsFilterData(filteredData,lowerLimit,UpperLimit){

    var studentsDetails = StudentsDetails;
    var percentage = 0;

    for (var i = 0; i< studentsDetails.results.length; i++) {
      percentage = this.getPercentage(studentsDetails.results[i]);
      if(percentage > lowerLimit && percentage < UpperLimit ){
        filteredData.push(studentsDetails.results[i]);
      }
    }
    return filteredData
  }

  getPercentage(studentDetails){
    var total = studentDetails.marks.english +
                  studentDetails.marks.hindi +
                  studentDetails.marks.mathematics

    return (total/3).toFixed(2);
  }

  render() {

    var categories = Filters;
    var filters = this.getFilters(categories);
      return (
        <div className="rows">
          <SearchBox  displayResult={this.displayResult.bind(this)} />
          <div>
            {filters}
          </div>
          <table id="marskSheet">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Percentage</td>
              </tr>
              {this.state.studentData}
            </tbody>
          </table>
        </div>
      );
  }
}

export default StudentMarksheet;
