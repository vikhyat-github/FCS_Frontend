import React from 'react'
import "../Styles/Login.css"
import { TextField } from '@material-ui/core'
import { Icon } from 'semantic-ui-react'
import Image from "../Assets/login_page_illustration.jpg";
import { BrowserRouter as Router,
    Link,
    useRouteMatch } from "react-router-dom"
function Login() {
    return (
        <div className="Login">
            <div className="login__left">
                <img src={Image}/>
            </div>
            <div className="login__right">

                <div className="right__main">
                    <p>Login</p>
                    <div className="inputs">

                        <TextField className="text-field"
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            autoComplete="current-email"
                            fullWidth
                            variant="outlined"
                        />
                        <TextField className="text-field"
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                            variant="outlined"
                        />
                        <div className="login__button" >Login</div>            
                    </div>
                    <div className="other__option">
                        <span className="text__container"> OR </span>
                        <div className="icon__container">
                            <div className="twitter__icon"><Icon className="inner__icon" name="twitter"  size="mini"/></div>
                            <div className="facebook__icon"><Icon className="inner__icon" name='facebook f' size="mini"/></div>
                            <div className="github__icon"><Icon className="inner__icon" name="github"  size="mini"/></div>
                            <div className="google__icon"><Icon className="inner__icon" name="google" size="mini"/></div>
                        </div>
                    </div>
                    <div className="lower__section">
                        <Link to="forgot__password">Forgot Password?</Link>
                        <div className="signup__button">Sign up</div>
                        {/* <Button variant="outlined">Sign up</Button> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
