import React from 'react';

class Checkbox extends React.Component{

  handleChange(){
    this.props.selectedCheckbox(this.props.label)
  }

  render(){
    return (
      <p><input type="checkbox"  onChange = {this.handleChange.bind(this)}/>
        {this.props.label}
      </p>
        );
      }
    }

export default Checkbox;
