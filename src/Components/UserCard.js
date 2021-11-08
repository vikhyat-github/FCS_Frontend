import React from 'react'
import {useStateValue} from "../StateProvider"
import "../Styles/UserCard.css"
function UserCard() {
    const [{user}, dispatch] = useStateValue()
    return (
        <div style={{background:'white', display:'flex', width:800, borderRadius:10, padding:40}} className="user__card">
            <div style={{background:'white', alignItems:'center', display:'grid', placeItems:'center'}}>
                <img className="user__image" src={user.image} alt="user--image" style={{objectFit:'contain', width:200, borderRadius:"50%", background:'white'}}/>
            </div>
            <div style={{paddingInline:20, background:'white', height:"100%", padding:20, display:'flex', flexDirection:'column'}}>
                <div style={styles.dataField}>Name : <span style={{fontWeight:300}}>{user.name}</span></div>
                <div style={styles.dataField}>DOB : <span style={{fontWeight:300}}>{user.dob}</span></div>
                <div style={styles.dataField}>Email : <span style={{fontWeight:300}}>{user.email}</span></div>
                <div style={styles.dataField}>Role : <span style={{fontWeight:300}}>Seller</span></div>
            </div>
        </div>
    )
}

export default UserCard
const styles = {
    dataField : {
        fontSize:20, 
        color:"black", 
        fontWeight:400, 
        width:400, 
        // background:'#e8e8e8', 
        padding:10, 
        borderRadius:5,
        marginBlock:5
    }
}
