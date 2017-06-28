import React from 'react';
import StudentsDetails from './StudentsDetails.js';
import './App.css';
import SearchBox from './Search.js';
import Checkbox from './Checkbox.js';
import Filters from './Filters';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class StudentMarksheet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            studentData : StudentsDetails.results,
            filteredData : StudentsDetails.results
        };
    }

    displayResult() {
        var rows = [];
        var percentage = [];
        var font = [];

        this.state.filteredData.forEach((object,i)=>{
            percentage = this.getPercentage(object);
            font = percentage < 35 ? "red" : "";

            rows.push(
                <tr key = {i} style = {{color: font }}>
                  <td>{object.firstName}</td>
                  <td>{object.lastName}</td>
                  <td>{percentage}</td>
                </tr>)
            });
        return rows;
    }

     getCheckboxes(categories) {
        var checkboxes = [];
            categories.forEach((object,key)=>{
                checkboxes.push(<Checkbox selectedCheckbox = {this.selectedCheckbox.bind(this)}
                    key = {key} label = {object} />)
            });
        return checkboxes;
    }

    selectedCheckbox(filter) {

        var lowerLimit = 0;
        var UpperLimit = 100;

        if(filter === 'Distinction') {
            lowerLimit = 60;
            UpperLimit = 100;
        }
        if(filter === 'First Class') {
            lowerLimit = 50;
            UpperLimit = 60;
        }
        if(filter === 'Second Class') {
            lowerLimit = 35;
            UpperLimit = 50;
        }
        if(filter === 'Fail'){
            lowerLimit = 0;
            UpperLimit = 35;
        }

        debugger
        this.state.filteredData = this.state.studentData.filter((student)=>{
            var percentage = this.getPercentage(student);
            return percentage > lowerLimit && percentage < UpperLimit
        });

        this.setState(this.state);
    }

    getPercentage(studentDetails){
        var total = studentDetails.marks.english + studentDetails.marks.hindi + studentDetails.marks.mathematics;
        return (total/3).toFixed(2);
    }

    showSearchedResult(matchRecords){
        this.state.filteredData = matchRecords;
        this.setState(this.state);
    }

    render() {
        var categories = Filters;
        var filters = this.getCheckboxes(categories);
        return (
            <div className ="rows">
                <SearchBox  showSearchedResult = {this.showSearchedResult.bind(this)} />
                <div>
                    {filters}
                </div>
                    <table id = "marskSheet">
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Percentage</td>
                        </tr>
                        {this.displayResult()}
                    </tbody>
                  </table>
            </div>
        );
    }
}

export default StudentMarksheet;
