import React from 'react';
import StudentsDetails from './StudentsDetails.js';
import './App.css';
import SearchBox from './Search.js';
import Checkbox from './Checkbox.js';
import Filters from './Filters';
import Categories from './Categories.js'

class StudentMarksheet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            studentData : StudentsDetails.results,
            filteredData : StudentsDetails.results
        };
    }

    redirectTo(id){
        window.location.hash = 'student?index='+id;
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
                  <td onClick = {this.redirectTo.bind(null,object.id)} >{object.firstName}</td>
                  <td>{object.lastName}</td>
                  <td>{percentage}</td>
                </tr>)
            });
        return rows;
    }

     getCheckboxes(categories) {
        var checkboxes = [];
            categories.forEach((object,key)=>{
                checkboxes.push(<div className='col-md-4 col-md-offset-2'><Checkbox selectedCheckbox = {this.selectedCheckbox.bind(this)}
                    key = {key} label = {object} /></div>)
            });
        return checkboxes;
    }

    selectedCheckbox(filter) {

        this.state.filteredData = [];
         var categoriesArray = Categories;
        var index = this.filtersArray.indexOf(filter);
        if (index > -1) {
           for (let key in categoriesArray){
            if(key === filter && this.filtersArray.indexOf(filter) > -1){
                lowerLimit = categoriesArray[key].lowerLimit;
                upperLimit = categoriesArray[key].upperLimit;
            }

            this.finalResult.forEach((student,i)=>{
                var percentage = this.getPercentage(student);
                    if(percentage > lowerLimit && percentage < upperLimit){
                    this.finalResult.splice(i, 1);
                }
            });
        }
           this.state.filteredData = this.finalResult;
           this.setState(this.state);
           this.filtersArray.splice(index, 1);
        }else{
            this.filtersArray.push(filter);
        }

        var lowerLimit = 0;
        var upperLimit = 0;

        for (let key in categoriesArray){
            if(key === filter && this.filtersArray.indexOf(filter) > -1){
                lowerLimit = categoriesArray[key].lowerLimit;
                upperLimit = categoriesArray[key].upperLimit;
            }
        }

        if(lowerLimit !== upperLimit){
            this.state.filteredData = this.state.studentData.filter((student)=>{
                var percentage = this.getPercentage(student);
                return percentage > lowerLimit && percentage < upperLimit
            });

            this.state.filteredData.forEach((object,i)=>{
                this.finalResult.push(object);
            });

            this.state.filteredData = this.finalResult;
            this.setState(this.state);
        }

        if(this.finalResult.length == 0){
            this.state.filteredData = this.state.studentData;
        }
    }

    getPercentage(studentDetails){
        var total = studentDetails.marks.english + studentDetails.marks.hindi + studentDetails.marks.mathematics;
        return (total/3).toFixed(2);
    }

    showSearchedResult(matchRecords){
        this.state.filteredData = matchRecords;
        this.setState(this.state);
    }

    componentWillMount() {
        this.filtersArray = [];
        this.finalResult = [];
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
                    <table id="marskSheet" className="table table-hover">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Percentage</th>
                        </tr>
                        {this.displayResult()}
                    </tbody>
                  </table>
            </div>
        );
    }
}

export default StudentMarksheet;
