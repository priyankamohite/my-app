import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox.js'

class Categories extends React.Component{
  render(){

    var categories = getCategories();
    var filters = getFilters(categories);
     return (
        <div>
          {filters}
        </div>
      );
    }
  }

  function getCategories() {
  return {
    categories: [{1:'Distinction'},{2:'First Class'},{3:'Second Class'},{4:'Fail'}]};
  }

  function getFilters(categories){

    var checkboxes = [];
    for (var i = 0; i < categories.categories.length; i++) {
      checkboxes.push(<Checkbox label={categories.categories[i][i+1]}/>)
    }
    return checkboxes;
  }

export default Categories;
