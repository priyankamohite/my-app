import React from 'react';
import Student from './Student.js';
import Application from './App';
import {HashRouter,Route} from 'react-router-dom';

var route = (
  <HashRouter>
      <div>
        <Route exact = {true} component={Application} path='/' />
        <Route component={Student} path='/Student' />
      </div>
   </HashRouter>
  );

export default route;

