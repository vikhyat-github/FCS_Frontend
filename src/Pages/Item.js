import React from "react"
import './Item1.css'
import IMG from '../Assets/images/fimg1.jpg'
import IMG1 from '../Assets/images/fimg2.jpg'
import IMG2 from '../Assets/images/fimg3.jpg'
import Star from '../Assets/images/str.jpg'
import { Button } from "semantic-ui-react"
import "../Styles/Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Header from '../Components/Header.js'

function Item(){

    return(
    <div className="Logo">


        <Header></Header>


        <div className="main">

        <div className="image">
        
        <img src={IMG} height={250} width={250}/>
        <img src={IMG1} height={250} width={250}/>
        <div><img src={IMG2} height={250} width={250}/></div>
        </div>
        
        <div className="text">
        <div className="firstline">
        <h1>PHILIPS DAILY COLLECTION 600 Watts</h1>
        </div> 
        <div className="secondline">Product ID : 4390</div>
        <div className="thirdline">Ratings : 4.4/5</div>


        <h1>MRP 16,900.00</h1>
 
        <div><Button className="button1">Add to Cart</Button></div>

        <div><Button className="button2">Add to Wishlist</Button></div>

        <div className="para">
            <h2>Product details:</h2>
            <h2>PHILIPS 6000 watts toaster</h2>
            <h2>2 years warranty</h2>
            <h2>20% off on payment with paytm</h2>
        </div>
        <h2>Rate is out of 5 stars</h2>
        <div className="rating">
            <img src={Star} height={25} width={25}/>
            <img src={Star} height={25} width={25}/>
            <img src={Star} height={25} width={25}/>
            <img src={Star} height={25} width={25}/>
            <img src={Star} height={25} width={25}/>

        </div>

        </div>


    </div>

    </div>
     

    )
}

export default Item