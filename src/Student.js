import React from 'react';
import StudentsDetails from './StudentsDetails.js';

class Student extends React.Component{

    getStudentDetails(){
      var URL = window.location.href;
      var parameters = URL.split('=');
      var id = parameters.pop();
      var studentDetails = StudentsDetails;
      var studentDisplay = [];

      studentDetails.results.forEach((object,i)=>{
          if(studentDetails.results[i].id == id){
            studentDisplay = object;
          }
        });

      studentDisplay.totalMarks = this.getTotalMarks(studentDisplay);
      studentDisplay.percentage  = this.getPercentage(studentDisplay.totalMarks);
      return studentDisplay;
    }

    getTotalMarks(studentDetails){
        return studentDetails.marks.english +
               studentDetails.marks.hindi +
               studentDetails.marks.mathematics;
    }

    getPercentage(total){
        return (total/3).toFixed(2);
    }

    displayName(){
      var studentDisplay = this.getStudentDetails();
      return <div>{studentDisplay.firstName}  {studentDisplay.lastName}</div>
    }

    displayMarks(){
    var studentDisplay = this.getStudentDetails();
      return <tr>
              <td>{studentDisplay.marks.english}</td>
              <td>{studentDisplay.marks.english}</td>
              <td>{studentDisplay.marks.english}</td>
              <td>{studentDisplay.totalMarks}</td>
              <td>{studentDisplay.percentage}</td>
            </tr>;
    }

    render(){
    return (
      <div>
        <span>
          <a href="#"> click here to go back </a>
        </span>
        <span>
          {this.displayName()}
        </span>
        <table id = "marskSheet" className="table table-hover">
          <tbody>
            <tr>
              <th>English</th>
              <th>Hindi</th>
              <th>Mathematics</th>
              <th>Total</th>
              <th>Percentage</th>
            </tr>
              {this.displayMarks()}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Student;
