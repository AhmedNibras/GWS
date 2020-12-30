import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

export default function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication =() =>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className = 'header'>
            <Link to="/">
            <img 
            className ="header_logo"
            src ="gws.png"
            />
            </Link>

            <div
            className = "header_search">
                <input
                className ="header_searchInput"
                type="text"/>
                <SearchIcon
                className ="header_searchIcon" 
                />
                {/*Logo*/}
            </div>
        <div className="header_nav">
            <Link to={!user && "/login"}>
        <div onClick={handleAuthentication}
            className ="header_option">
            {/* user */}
            <span  className ="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
    <span  className ="header_optionLineTwo">{user ? "Sign Out" : "Sign In"} </span>
        </div>
            </Link>

        <Link to='/order'>
        <div className ="header_option">
        <span  className ="header_optionLineOne">Return</span>
        <span  className ="header_optionLineTwo">& Order</span>
        </div>
        </Link>


        <div className ="header_option">
        <span  className ="header_optionLineOne">Your</span>
        <span  className ="header_optionLineTwo">Prime</span>
        </div> 

        <Link to="/checkout">
        
        <div className="header_optionBasket">
            
            <ShoppingBasketIcon/>
    <span className ="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>

        </Link>
        </div>
    </div>
    )
}