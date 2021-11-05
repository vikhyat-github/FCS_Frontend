
export function checkPassword(password) {
    // console.log(password)
    if(password.length < 8)
    {
        // console.log("pass")
        return "Password must be 8 digit long"
    }
    return ""
}
export const checkDOB = DOB => {
    if(!DOB){
        return "Please enter your D.O.B"
    }
    return ""
}
export const checkMobile = mobile => {
    if(!mobile || mobile.length < 10) {
        return "Please enter yout Mobile no."
    }
    return ""
}
export const checkName = name => {
    if(!name){
        return "Please enter your name"
    }
    else if(name.length < 3){
        return "Name should contain atleast 3 char"
    }
    return ""
}
