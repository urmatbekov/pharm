import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="header__menu">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/products">Shop</NavLink></li>
                    <li><a href="#">Pages</a>
                        <ul className="header__menu__dropdown">
                            <li><a href="#">Shop Details</a></li>
                            <li><a href="#">Shoping Cart</a></li>
                            <li><a href="#">Check Out</a></li>
                            <li><a href="#">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#"><NavLink exact to="/contacts">Contact</NavLink></a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;