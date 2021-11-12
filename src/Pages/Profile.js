import React from 'react'
import Header from "../Components/Header"
import UserCard from '../Components/UserCard'
import { Icon } from 'semantic-ui-react'
import "../Styles/Profile.css"
import ChangesForm from '../Components/ChangesForm'
import {useStateValue}  from "../StateProvider"
import { actionTypes } from '../app/reducer'
import { useHistory } from 'react-router'
import { Link } from "react-router-dom"
function Profile() {
    const [{user}, dispatch] = useStateValue()
    const history = useHistory()
    const handleClick = () => {
        dispatch({
            type: actionTypes.SET_USER,
            user: null
        })
        dispatch({
            type: actionTypes.SET_TOKEN,
            accesstoken:null
        })
        history.push("/")
    }
    return (
        <div className="profile">
            <Header />
            <div style={{marginBlock:100, height:"100vh", padding:20}}>
                
                
                <div style={{display:'flex'}}>
                    <UserCard />
                    <div style={{margin:20}} className="edit__details" onClick={handleClick}>
                        Logout
                    </div>
                    {user.role==="admin" ? <Link  to="/userPage">
                        <div className="edit__details" style={{margin:20}}>
                            See all users
                        </div> 
                        </Link>: 
                    <div></div>}
                </div>
                <ChangesForm />
            </div>

        </div>
    )
}

export default Profile
