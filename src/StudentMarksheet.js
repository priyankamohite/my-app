import React from 'react';
import StudentsDetails from './StudentsDetails.js';
import './App.css';
import SearchBox from './Search.js';
class StudentMarksheet extends React.Component {

displayResult(){
  console.log('in function');
}

getRows(studentDetails){

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

  rows.push(<tr style={{color: font[i] }}>
      <td>{studentDetails.results[i].firstName}</td>
      <td>{studentDetails.results[i].lastName}</td>
      <td>{percentage[i]}</td>
      </tr>)
    }
    return rows;
}

render() {
  var studentDetails = StudentsDetails;
  var rows = this.getRows(studentDetails)
    return (
     <div className="rows">
        <SearchBox  displayResult={this.displayResult} />
        <table id="marskSheet">
         <tbody>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Percentage</td>
          </tr>
              {rows}
         </tbody>
         </table>
        </div>
      );
   }

}

export default StudentMarksheet;
