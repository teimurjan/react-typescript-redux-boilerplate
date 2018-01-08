import * as React from 'react';
import {Route} from 'react-router';
import App from './ui/App/App';
import Login from './ui/Login/LoginContainer';

export default (
  <Route path="/" component={App}>
    <Route path="login" component={Login}/>
  </Route>
);