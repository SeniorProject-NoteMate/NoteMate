  
import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Link } from 'react-router-dom';

import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

//class SignPages extends Component {
  export default function SignPages(){
 // render() {
    return (
    <Router basename="/react-auth-ui/">
        <div className="PageForm">
          <div className="Left_Side"></div>
          <div className="Right_Side">
            <div className="PageSwitcher">
                <NavLink to="/signin" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>
            <div className="FormTitle">
                  <NavLink to="/signin" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>
            <Route exact path="/" component={SignupForm}>
            </Route>
            <Route path="/signin" component={SigninForm}>
            </Route>

          </div>

        </div>
     </Router>
    );
  }
//}

//export default SignPages;