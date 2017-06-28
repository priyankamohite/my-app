import React from 'react';
import StudentsDetails from './StudentsDetails.js';

class SearchBox extends React.Component{
    searchStudent(e){
        e.preventDefault();
        var key = this.refs.search.value;
        var studentDetails = StudentsDetails;
        var match = [];
        var fname = '';
        var lname = '';

        studentDetails.results.forEach((object,i)=>{
            fname = object.firstName.toLowerCase();
            lname = object.lastName.toLowerCase();
                if(fname.indexOf(key) !== -1 || lname.indexOf(key) !== -1){
                    match.push(object);
                }
        });
        var matchRecords = {results:match};
        this.props.displayResult(matchRecords)
    }

    render(){
        return (
          <form>
            <input type = "text" name ='key' ref = "search" placeholder = "Search..." />
            <button onClick = {this.searchStudent.bind(this)}>
              Search
            </button>
          </form>
        );
    }
}

export default SearchBox;
