import React from 'react';

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

