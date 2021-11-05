import React, {useState} from 'react'
import "../Styles/Login.css"
import { TextField } from '@material-ui/core'
import { Icon } from 'semantic-ui-react'
import Image from "../Assets/login_page_illustration.jpg";
import { Link } from "react-router-dom"
import {actionTypes, reducer} from "../app/reducer";
import { useStateValue } from "../StateProvider"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [{}, dispatch] = useStateValue();
    const login = () => {
        console.log(email)
        fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : JSON.stringify({
                email: email,
                password : password
            })
        }).then(res => res.json()).then(data => dispatch({
            type: actionTypes.SET_USER,
            user: data
        }))
    }
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
                            onChange={e=>setEmail(e.target.value)}
                        />
                        <TextField className="text-field"
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            fullWidth
                            variant="outlined"
                            onChange={e=>setPassword(e.target.value)}
                        />
                        <div className="login__button" onClick={login}>Login</div>            
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
