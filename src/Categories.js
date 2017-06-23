import React from 'react';
import Checkbox from './Checkbox.js'

class Categories extends React.Component{

  getCategories() {
  return {
    categories: [{1:'Distinction'},{2:'First Class'},{3:'Second Class'},{4:'Fail'}]};
  }

  getFilters(categories){

    var checkboxes = [];
    for (var i = 0; i < categories.categories.length; i++) {
      checkboxes.push(<Checkbox key={i} label={categories.categories[i][i+1]}/>)
    }
    return checkboxes;
  }

  render(){
    var categories = this.getCategories();
    var filters = this.getFilters(categories);
     return (
        <div>
          {filters}
        </div>
      );
    }
  }

export default Categories;
