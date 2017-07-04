import React from 'react';
import StudentsDetails from './StudentsDetails.js';

class Student extends React.Component{

    render(){

    var URL = window.location.href;
    var parameters = URL.split('=');
    var id = parameters.pop();



    return (
        <table id = "marskSheet">
        <tbody>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Percentage</td>
        </tr>
          <td>Sanket</td>
          <td>Gadade</td>
          <td>70</td>
        </tbody>
        </table>
        );
  }
}

export default Student;
