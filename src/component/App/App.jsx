import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Login/Login';
import './App.css';

const App = () => (
  <div>
    <Route exact path="/" component={Login} />
    {/* <Route path="/HomePage" component={HomePage} />
    <Route path="/ForgotPassword" component={ForgotPassword} />
    <Route path="/EnterOTP" component={EnterOTP} />
    <Route path="/ResetPassword" component={ResetPassword} /> */}
  </div>
);

export default App;
