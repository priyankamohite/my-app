import React from 'react';
import ReactDOM from 'react-dom';
import StudentMarksheet from './StudentMarksheet.js'
import './App.css';

class Application extends React.Component{
  render(){
    return (
       <div className="container">
          <StudentMarksheet />
       </div>
      );
  }
}

export default Application;

