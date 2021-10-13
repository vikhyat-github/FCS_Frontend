import React from 'react'
import "../Styles/Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="Header">
            <div className="logo">
                {/* <image /> */}
            <Link to="/">
                <h1>Fake Store</h1>
            </Link>
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
                <Link to="/checkout">
                    <ShoppingCartIcon className="icon"/>
                </Link>
            </div>
        </div>
    )
}

export default Header
