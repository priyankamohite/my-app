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
      for (var i = 0; i< studentDetails.results.length; i++) {
          fname = studentDetails.results[i].firstName.toLowerCase();
          lname = studentDetails.results[i].lastName.toLowerCase();
          if(fname.indexOf(key) !== -1 || lname.indexOf(key) !== -1){
              match.push(studentDetails.results[i]);
          }
      }

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
