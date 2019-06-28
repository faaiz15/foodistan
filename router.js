import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from './pages/home';
import Login from './components/signInAll' 
import signinuser from './signinuser';

import Signin from './components/signin'
import Home from './components/Home'
import custo from './pages/custo'
import res from './pages/resturent'
import Signup from './components/signup';
import SignupRes from './components/SignUpRes'
function Approuter(){
    return(
        <Router>
        <Route path="/" exact component={home} />
       
        {/* <Route path="/Home" component={Home} /> */}
        <Route path="/Login" component={Login} />

        <Route path="/Signin" component={Signin} />
        {/* <Route path="/signinuser/" component={signinuser} /> */}
        <Route path="/custo/" component={custo} />
        <Route path="/res/" component={res} />
        <Route path="/Signup/" component={Signup} />
        <Route path="/SignupRes/" component={SignupRes} />

        {/* <Route path="/users/" component={contact} /> */}
        </Router>
    );
}
export default Approuter;