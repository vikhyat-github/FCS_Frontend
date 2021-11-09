import {TextField } from '@material-ui/core'
import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { actionTypes } from '../app/reducer';
import Image from "../Assets/login_page_illustration.jpg";
import {checkDOB, checkMobile, checkName, checkPassword} from "../validation"
import {useStateValue} from "../StateProvider"
function SignUp() {
    const history = useHistory()
    const [{}, dispatch] = useStateValue()
    const [name, setName] = useState({name:"", error:""})
    const [dob, setDOB] = useState({dob:"", error:""})
    const [email, setEmail] = useState({email:"", error:""})
    const [mobile, setMobile] = useState({mobile:"", error:""})
    const [password, setPassword] = useState({password:"", error:""})
    const [error, setError] = useState()
    const checkError = () => {
        if(!name.error && !dob.error && !mobile.error && !password.error && !error && !email.error) return true
        return false
    }
    const Signup = () => {
        if(checkError() ) {
            fetch("http://localhost:5000/api/auth/register", {
                method:'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name: name.name,
                    email: email.email,
                    // password: bcrypt.hash(password, 10),
                    password : password.password,
                    dob: dob.dob,
                    mobile: mobile.mobile
                })
            }).then(res => res.json()).then(data => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: data
                })
                history.push("/")
            })
        }
    }
    return (
            <div className="Login">
                <div className="login__left">
                    <img src={Image} alt="login page illustration"/>
                </div>
                <div className="login__right">
    
                    <div className="right__main">
                        <p>Sign In</p>
                        <div className="inputs">
                            <TextField className="text-field"
                                
                                id="outlined-text-input"
                                label="Your Full Name"
                                type='text'
                                autoComplete="current-name"
                                fullWidth
                                error={name.error}
                                variant="outlined"
                                onChange={e=>setName({...name, name : e.target.value, error: checkName(e.target.value)})}
                            />
                            <span style={{color:"red"}}>{name.error}</span>
                            <TextField className="text-field"
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                                fullWidth
                                variant="outlined"
                                onChange={e=>setEmail({...email, email : e.target.value})}
                            />
                            <span style={{color:"red"}}>{email.error}</span>
                            <TextField className="text-field"
                                id="outlined-password-input"
                                label="Date of birth"
                                type="date"
                                // autoComplete="current-"
                                error={dob.error}
                                fullWidth
                                variant="outlined"
                                onChange={e=>{setDOB({...dob, dob : e.target.value, error:checkDOB(e.target.value)})
                                console.log(dob.error)
                            }}
                            />
                            <span style={{color:"red"}}>{dob.error}</span>
                            <TextField className="text-field"
                                id="outlined-tel-input"
                                label="Mobile number"
                                type='number'
                                autoComplete="current-mobile"
                                fullWidth
                                error={mobile.error}
                                onChange = {e => {
                                    if(e.target.value.length <= 10)
                                    {
                                        setMobile({...mobile, mobile:e.target.value, error: checkMobile(e.target.value)})
                                    }
                                    else e.target.value = mobile.mobile
                                }}
                                variant="outlined"
                                // onChange={e=>setPassword(e.target.value)}
                            />
                            <span style={{color:"red"}}>{mobile.error}</span>
                            <TextField className="text-field"
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                                error={password.error}
                                variant="outlined"
                                onChange={e=>{setPassword({...password, password : e.target.value, error: checkPassword(e.target.value)})}}
                            />
                            <span style={{color:"red"}}>{password.error}</span>

                            <TextField className="text-field"
                                id="outlined-password-input"
                                label="Confirm password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                                variant="outlined"
                                error={error}
                                onChange={e=>{
                                    if(e.target.value!==password.password)
                                    {
                                        setError("password and confirm password must be equal")
                                    }
                                    else setError("")
                                }}
                            />
                            <span style={{color:"red"}}>{error}</span>
                            
                            <div className="login__button" onClick={Signup}>Sign in</div>            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SignUp
