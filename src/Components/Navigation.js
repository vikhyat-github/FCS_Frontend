import React from 'react'
import Home from "../Pages/Home"
import Login from '../Pages/Login';
import Checkout from "../Pages/Checkout"
import StripeContainer from "../Components/StripeContainer"

import { BrowserRouter as Router,
  Switch,
  Route, Redirect} from "react-router-dom"
import SignUp from '../Pages/SignUp';
import Item from "../Pages/Item"
import {useStateValue} from "../StateProvider"
import Error from '../Pages/Error';
import Profile from '../Pages/Profile';
import UserPage from '../Pages/UserPage'
function Navigation() {
    const [{user}] = useStateValue()
    return (
        <Router >
            {
            user ? <Switch>
                <Route component={Home} exact path="/"/>
                <Route component={Checkout} exact path="/checkout" /> 
                <Route component={Item} exact path="/product:productId" />
                <Route component={StripeContainer} exact path="/payment"/> 
                <Route component={Profile} exact path="/profile" />
                <Route component={UserPage} exact path="/userPage"/>
                <Route component={Error} exact path="/404" />
                <Redirect to="/" />
            </Switch> : 
            <Switch>
                <Route component={Login} exact path="/login"/>
                <Route component={SignUp} exact path="/signup" />
                <Route component={Error} exact path="/404" />
                <Redirect to="/login" /> 
            </Switch> 
            }
              
        </Router>
    )
}

export default Navigation
