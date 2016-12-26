import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import App from './routes/App';
import Usercenter from "./components/home/usercenter/header"
import Changecenter from "./components/home/changecenter/changecenter"
import Settings from "./components/home/usercenter/settings/index"
import Recharge from "./components/home/recharge/recharge"

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="Usercenter" component={Usercenter} />
      <Route path="Changecenter" component={Changecenter}/>
      <Route path="Settings" component={Settings}/>
      <Route path="Recharge" component={Recharge}/>
    </Router>
  );
};
