import React from 'react';
import Categories from './Categories.js'

class SearchBox extends React.Component{
  searchStudent(){

  }
  render(){
    return (
       <form>
          <input type="text" placeholder="Search..." />
          <button onClick={this.searchStudent}>
            Search
          </button>
          <Categories />
        </form>
      );
  }
}

export default SearchBox;
