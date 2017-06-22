import React from 'react';
import ReactDOM from 'react-dom';

class Checkbox extends React.Component{
  render(){
    return (
        <p>
          <input type="checkbox" />
          {this.props.label}
        </p>
        );
  }
}

export default Checkbox;

