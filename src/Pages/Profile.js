import React from 'react'
import Header from "../Components/Header"
import UserCard from '../Components/UserCard'
import {useStateValue} from "../StateProvider"
import { Icon } from 'semantic-ui-react'
import "../Styles/Profile.css"
import ChangesForm from '../Components/ChangesForm'
function Profile() {
    const [{user}, dispatch] = useStateValue()

    return (
        <div className="profile">
            <Header />
            <div style={{marginBlock:100, height:"100vh", padding:20}}>
                
                
                <div style={{display:'flex'}}>
                    <UserCard />
                    <div style={{margin:20}} className="edit__details">
                        <Icon name="edit icon"/> 
                        Edit details
                    </div>
                </div>
                <ChangesForm />
            </div>

        </div>
    )
}

export default Profile
const styles = {
    dataField : {
        fontSize:20, 
        color:"black", 
        fontWeight:400, 
        width:400, 
        background:'#e8e8e8', 
        padding:10, 
        borderRadius:5}
}