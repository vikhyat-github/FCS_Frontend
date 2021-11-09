import React from 'react'
import { Icon } from 'semantic-ui-react'
import "../Styles/Footer.css"
import sourav_profile from "../Assets/sourav_profile.jpg"

import { Avatar } from '@material-ui/core'
const Team = [
    {
        name:"Sourav",
        photo:sourav_profile    
    },
    {
        name:"Vikhyat Yadav",
        photo:""
    },
    {
        name: "Rajat Singharia",
        photo:""
    },
    {
        name:"Shivam Gautam",
        photo:""
    },
    {
        name:"Ayush Arpit",
        photo:""
    }
]
function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo" style={{fontSize:36, fontWeight:'800', color:'orange'}}>
                Fake Store
            </div>
            <div style={{display:'flex', paddingTop:20}}>
                <div style={{marginLeft:20, marginRight:80}}>                    
                    <h2 style={{marginBottom:40}}>About</h2>
                    <div style={styles.text}>Fake Store</div>
                    <div style={styles.text}>Blogs</div>
                    <div style={styles.text}>Carrers</div>
                    <div style={styles.text}>Referal Program</div>
                    
                </div>
                <div style={{marginLeft:20, marginRight:80}}>                    
                    <h2 style={{marginBottom:40}}>Legal</h2>
                    <div style={styles.text}>Terms of use</div>
                    <div style={styles.text}>Privacy Policy</div>
                    
                </div>
                <div style={{marginLeft:20, marginRight:80}}>                    
                    <h2 style={{marginBottom:40}}>Support</h2>
                    <div style={styles.text}>Help Center</div>                    
                    <div style={styles.text}>Transactions</div>                    
                    <div style={styles.text}>Replacement Policy</div>                    
                    <div style={styles.text}>Return & Refund</div>                    
                    <div style={styles.text}>Security</div>                    
                </div>
                <div style={{marginLeft:20, marginRight:80}}>                    
                    <h2 style={{marginBottom:40}}>Socials</h2>
                    <div style={styles.social__options}>
                        <div style={styles.icon_container}>
                            <Icon name="telegram plane" className="footer-icons" size="mini"/> </div>
                        <div style={styles.text}>Telegram</div>
                    </div>
                    <div style={styles.social__options}>
                        <div style={styles.icon_container}>
                            <Icon name="instagram" className="footer-icons" size="mini"/> </div>
                        <div style={styles.text}>Instagram</div>
                    </div >
                    <div style={styles.social__options}>
                        <div style={styles.icon_container}>
                            <Icon name="twitter" className="footer-icons" size="mini"/> </div>
                        <div style={styles.text}>Twitter</div>
                    </div>
                    <div style={styles.social__options}>
                        <div style={styles.icon_container}>
                            <Icon name="youtube" className="footer-icons" size="mini"/> </div>
                        <div style={styles.text}>YouTube</div>
                    </div >
                    <div style={styles.social__options}>
                        <div style={styles.icon_container}>
                            <Icon name="facebook f" className="footer-icons" size="mini"/> </div>
                        <div style={styles.text}>Facebook</div>

                    </div>

                </div>

                {/* Team info */}
                <div className="team__container" style={{marginLeft:20, marginRight:80}}>
                    <h2 style={{marginBottom:40}}>Team</h2>
                    {Team.map((member, index)=>
                    <div style={{display:'flex', alignItems:'center', marginBottom:20}} key={index}>
                        <Avatar src={member.photo}/>
                        <span style={styles.team__name}>{member.name}</span>
                    </div>)}
                    
                </div>
            </div>
            
        </div>
    )
}

export default Footer

const styles = {
    text: {
        fontSize:18, 
        marginBottom:10, 
        marginTop:20, 
        fontWeight:'500', 
        color:'gray'},

    icon_container: {
        height:50, 
        width:50, 
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:"orange",
        marginTop:10,
        marginBottom:10,
        marginRight:20, 
        borderRadius:50},
    social__options : {display:'flex', alignItems:'center', justifyContent:'flex-start'},
    team__name: {
        fontSize:24,
        color:'gray',
        fontWeight:'500',
        marginLeft:20
    }
    
}