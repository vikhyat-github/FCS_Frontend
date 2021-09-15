import React from 'react'
import "../Styles/Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function Header() {
    return (
        <div className="Header">
            <div className="logo">
                {/* <image /> */}
                <h1>Fake Store</h1>
                {/* <i class="fab fa-firstdraft" /> */}
            </div>
            <div className="category">
                <h2>Home</h2>
                <h2>Shop</h2>
                <h2>Mens</h2>
                <h2>Electronics</h2>
            </div>
            <div className="search-bar">
                <input type="text"></input>
                <SearchIcon />
            </div>
            <div className="icon-container">
                <FavoriteBorderIcon className="icon"/>
                <AccountCircleIcon className="icon"/>
                <ShoppingCartIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header
