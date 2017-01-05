import React from 'react';
import { Router, Route,IndexRoute, Link } from 'dva/router';
import Bar from './routes/bar';
import Home from './components/home';
import Manage from './components/manage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      	<Route component={Bar}>
      		<Route path="/" component={Home} />
      		<Route path="manage" component={Manage} />
      	</Route>
    </Router>
  );
}

export default RouterConfig;
