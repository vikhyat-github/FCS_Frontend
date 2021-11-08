import React from 'react'
import "../Styles/Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import {useStateValue} from "../StateProvider"
import { Avatar } from '@material-ui/core';
function Header() {
    const [{user}, dispatch] = useStateValue()
    console.log(user)
    return (
        <div className="Header">
            <div className="logo">
                <Link to="/" style={{color:'inherit'}}>
                    <h1 style={{color:'orange'}}>Fake Store</h1>
                </Link>
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
                <FavoriteBorderIcon className="icon" />
                <Link to="/profile">
                    <Avatar src={user? user.image : ""} className="icon-avatar"/>
                </Link>
                <Link to="/checkout" style={{color:'inherit'}}>
                    <ShoppingCartIcon className="icon"/>
                </Link>
            </div>
        </div>
    )
}

export default Header
