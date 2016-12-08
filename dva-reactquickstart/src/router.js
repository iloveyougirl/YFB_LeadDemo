import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import Example from './components/Example';
import Instruction from './components/Instructions/Instructions';
import Userstatistics from './components/Instructions/Userstatistics';
import Uploadimg from './components/Instructions/Uploadimage';
import Addnav from './components/Instructions/Addnav';
import Upload from './components/Instructions/Upload';
import AddnavInstra from './components/Instructions/AddnavInstra';

export default function({ history }) {
  return (
      <Router history={history}>
        <Route  component={Example}>
          <Route path="/" component={Instruction}/>
          <Route path="Userstatistics" component={Userstatistics}/>
          <Route path="Addnav" component={Addnav}/>
          <Route path="AddnavInstra/:name" component={AddnavInstra}/>
          <Route path="Uploadimg" component={Uploadimg}/>
          <Route path="Upload" component={Upload }/>
        </Route>
      </Router>
  );
};
