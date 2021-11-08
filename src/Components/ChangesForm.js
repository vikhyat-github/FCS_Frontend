import { TextField } from '@material-ui/core'
import React, {useState} from 'react'

function ChangesForm() {
    const [address, setAddress] = useState("")
    const submitChanges = () => {
        
    }
    return (
        <form typeof="submit" style={{width:"40%"}}>
            <TextField className="text-field"
                label="Your Address"
                id="outlined-text-input"
                type='text'
                autoComplete="current-address"
                fullWidth
                required={true}
                variant="outlined"
                style={{marginBlock:20}}
                onChange = {e=>setAddress(e.target.value)}
            />
            <button type="submit" onClick={submitChanges}>
                Save Changes
            </button>
        </form>
    )
}

export default ChangesForm
