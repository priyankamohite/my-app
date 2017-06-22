import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './Categories.js'

class SearchBox extends React.Component{
  render(){
    return (
       <form>
          <input type="text" placeholder="Search..." />
          <Categories />
        </form>
      );
  }
}

export default SearchBox;
