import React from 'react'
import Home from "../Pages/Home"
import Login from '../Pages/Login';
import Checkout from "../Pages/Checkout"
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch } from "react-router-dom"
import SignUp from '../Pages/SignUp';
function Navigation() {
    return (
        <Router >
            <Switch>
            <Route component={Home} exact path="/"/>
            <Route component={Login} exact path="/login"/>
            <Route component={SignUp} exact path="/signup"/>
            <Route component={Checkout} exact path="/checkout" />  
            </Switch>  
        </Router>
    )
}

export default Navigation
