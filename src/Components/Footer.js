import { StylesContext } from '@material-ui/styles'
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
        photo:"https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F184413449_137387315127173_8384035053257208249_n.jpg%3Fccb%3D11-4%26oh%3D380335d0468933f4173d6b42b8a14ed6%26oe%3D616C44F2&t=l&u=919871481912%40c.us&i=1624212140&n=dYcNb3RK2ln4GoAKsMM%2F%2Bo2Kfd4r0VcjaJiaWktcoEc%3D"
    },
    {
        name: "Rajat Singharia",
        phot: "https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F210824730_2982982771925797_2064954569855413217_n.jpg%3Fccb%3D11-4%26oh%3Da5868a8a464964f333632cd1cd6536c2%26oe%3D616BD1D2&t=l&u=919958040979%40c.us&i=1633929988&n=sPfvNeD%2FIK0yyVGOl%2F1wjq%2BQsaXEFaJJ5FUJZohuOGk%3D"
    },
    {
        name:"Shivam Gautam",
        photo:"https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F242290586_912549042949548_7637860309401417322_n.jpg%3Fccb%3D11-4%26oh%3Ddafcaf8483f73d37d486e2b1590d7834%26oe%3D616C44A2&t=l&u=917210171072%40c.us&i=1633159100&n=KZ1qwVpN0ZKXq9hB00b1Qh82eoHEtHzoffge3KjiWWU%3D"
    },
    {
        name:"Ayush Arpit",
        
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