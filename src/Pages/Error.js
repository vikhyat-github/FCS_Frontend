import React from 'react'
import '../Styles/Error.css'
import {Link} from "react-router-dom";
function Error() {
    return (
        <div className="error__page">
            <img className="banner" src="https://res.cloudinary.com/practicaldev/image/fetch/s--upMfnEaM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt="error image" srcset="" />
            <Link to="/">
                <button className="btn">Go Back</button>
            </Link>
        </div>
    )
}

export default Error
