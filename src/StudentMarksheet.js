import React from 'react';
import ReactDOM from 'react-dom';
import Application from './App';
import './App.css';

class StudentMarksheet extends React.Component {
render() {

var studentDetails = getStudentsDetails();
var rows = getRows(studentDetails)
  return (
    <div className="rows">
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

function getStudentsDetails() {
  return {
    results: [
      {"firstName": "Sanket", "lastName":"Gadade","marks":{"english":70, "hindi":60,"mathematics":46}},
      {"firstName": "Shubham", "lastName":"Laad","marks":{"english":40, "hindi":55,"mathematics":46}},
      {"firstName": "Swapnil", "lastName":"Patil","marks":{"english":50, "hindi":60,"mathematics":77}},
      {"firstName": "Ankita", "lastName":"Pawar","marks":{"english":50, "hindi":55,"mathematics":46}},
      {"firstName": "Vijayraj", "lastName":"Gadade","marks":{"english":35,"hindi":45,"mathematics":11}}
    ]
  };
}

function getRows(studentDetails){

let rows = [];
let total = [];
let percentage = [];
var font = '';

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

export default StudentMarksheet;
