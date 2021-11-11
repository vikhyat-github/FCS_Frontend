import React, {useState} from 'react'
import "../Styles/Login.css"
import { TextField } from '@material-ui/core'
import { Icon } from 'semantic-ui-react'
import Image from "../Assets/login_page_illustration.jpg";
import { Link, useHistory } from "react-router-dom"
import {actionTypes} from "../app/reducer";
import { useStateValue } from "../StateProvider"
import jwtDecode from 'jwt-decode';
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ {}, dispatch] = useStateValue();
    const [{accesstoken}, tokenDispatch] = useStateValue()
    const login = () => {
        console.log(email)
        fetch(`${process.env.REACT_APP_BACKEND}/api/auth/login`, {
            method: 'POST',
            mode:'cors',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : JSON.stringify({
                email: email,
                password : password
            })
        }).then(res => res.json()).then(data =>
           { dispatch({
                type: actionTypes.SET_USER,
                user: jwtDecode(data.accesstoken).user
            })
            dispatch({
                type: actionTypes.SET_TOKEN,
                accesstoken: data.accesstoken
            })
            history.push("/")
            
        })

        

        
    }
    return (
        <div className="Login">
            <div className="login__left">
                <img src={Image} alt="login page illustration"/>
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
                        <Link to="/">Forgot Password?</Link>
                        <Link to="/signup" style={{color:'inherit'}}>
                        
                            <div className="signup__button">Sign up</div>
                        </Link>
                        {/* <Button variant="outlined">Sign up</Button> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
