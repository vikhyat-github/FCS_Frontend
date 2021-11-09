import React,  {useState, useEffect} from 'react'
import "../Styles/Banner.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Banner() {
    const [currentIdx, setIdx] = useState(0)
    const images = [
        {url : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
        {url : "https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}
    ]
    const [image, setImage] = useState("https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")
    useEffect(() => {
        setImage(images[currentIdx].url)
    }, [currentIdx])
    return (
        <div className="banner">
            <div className="button-container">
                <ArrowBackIosIcon className="icon" onClick={()=> setIdx(()=>{
                    if(currentIdx===0){
                        return (images.length-1)%images.length
                    }
                    return (currentIdx-1)%images.length
                })}/>
                <ArrowForwardIosIcon className="icon" onClick={()=> setIdx((currentIdx+1)%images.length)}/>
            </div>
            <img src={image} alt="home banner img"/>
            
        </div>
    )
}

export default Banner
