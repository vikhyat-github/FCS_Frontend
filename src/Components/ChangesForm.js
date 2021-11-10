import { TextField } from '@material-ui/core'
import React, {useState} from 'react'
import { actionTypes } from '../app/reducer'
import { useStateValue } from '../StateProvider'
import { checkMobile } from "../validation"
function ChangesForm() {
    const [{user}, dispatch] = useStateValue()
    const [{accesstoken}, tokendispatch] = useStateValue()
    const [email, setEmail] = useState({email:user.email, error:""})
    const [mobile, setMobile] = useState({mobile:user.mobile, error:""})
    const [address, setAddress] = useState(user.address)

    const submitChanges = () => {
        fetch("http://localhost:5000/update/profile", {
            method:"POST",
            mode:'cors',
            headers:{
                "Content-Type" : "application/json",
                Authorization : `Bearer ${accesstoken}`
            },
            body:JSON.stringify({email:user.email, newemail:email.email, address: address, mobile:mobile.mobile})
        }).then(res => res.json()).then(data =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: data
            })
        })
    }
    return (
        <div typeof="" style={{width:"40%"}}>

            <TextField className="text-field"
                // label="Enter Name "
                id="outlined-text-input"
                type='number'
                autoComplete="current-mobile"
                fullWidth
                value={mobile.mobile}
                variant="outlined"
                style={{marginBlock:20}}
                error={mobile.error}
                onChange = {e=>setMobile({...mobile, mobile:e.target.value, error:checkMobile(e.target.value)})}
            />
            <TextField className="text-field"
                // label="Enter Name "
                id="outlined-text-input"
                type='email'
                autoComplete="current-email"
                fullWidth
                value={email.email}
                variant="outlined"
                style={{marginBlock:20}}
                error={email.error}
                onChange = {e=>setEmail({...email, email:e.target.value})}
            />
            <TextField className="text-field"
                label="Building or Flat no."
                id="outlined-text-input"
                type='text'
                autoComplete="current-address"
                fullWidth
                variant="outlined"
                style={{marginBlock:20}}
                onChange = {e=>setAddress({...address, flat:e.target.value})}
            />
            <TextField className="text-filed"
                label="Locality"
                id="outlined-text-input"
                type="text"
                autoComplete="current-state"
                variant="outlined"
                style={{marginBlock:20}}
                onChange = {e=> setAddress({...address, locality:e.target.value})}
            />
            <TextField className="text-field" 
                label="State"
                id="outlined-text-input"
                type="text"
                autoComplete="current-state"
                variant="outlined"
                style={{marginBlock:20}}
                onChange = {e=> setAddress({...address, state:e.target.value})}
            />
            <TextField className="text-field" 
                label="District"
                id="outlined-text-input"
                type="text"
                autoComplete="current-state"
                variant="outlined"
                style={{marginBlock:20}}
                onChange = {e=> setAddress({...address, district:e.target.value})}
            />
            <TextField className="text-field" 
                label="PIN Code"
                id="outlined-text-input"
                type="number"
                autoComplete="current-state"
                variant="outlined"
                style={{marginBlock:20}}
                onChange = {e=> setAddress({...address, pin:e.target.value})}
            />
            <button type="" onClick={submitChanges}>
                Save Changes
            </button>
        </div>
    )
}

export default ChangesForm
