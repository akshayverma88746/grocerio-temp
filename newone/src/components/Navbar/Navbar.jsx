import React, { useState, useContext } from 'react'
import "./navbar.css"
import {useNavigate, useLocation,BrowserRouter as Router, Link, NavLink, useHistory} from "react-router-dom";
import { ShoppingBasket, UserCircle2 } from 'lucide-react';
import Dropdown from '../Dropdown/Dropdown';
import {UserContext} from "C:/Users/Akshay/Desktop/grocerio - Copy/newone/src/App.js"
import Temp from '../Cart/Temp';

const Navbar = ({size, setShow}) => {
  const loaction = useLocation()
  const history = useNavigate();
  const {state, dispatch} = useContext(UserContext);
  const [openProfile, setOpenProfile] = useState(false);
  if(state){
    return (
        <>
        <div class="hero">
                <nav>
                    <h2 class="logo"><span style={{color: '#e7b031'}}>G</span>rocerio</h2>
                    <ul>
                        <div className='comp' style={{paddingRight: '35rem'}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Service</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </div>
                    </ul>
                        <div className='cart' onClick={()=>setShow(false)}>
                            <Link to="#"><ShoppingBasket size={25} color="#ffffff" /></Link>
                        </div>
                        <div className='search-box'>
                            <input  className="search-txt" type="text" name=" " placeholder='Type to search'/>
                            <a className='search-btn' href='#'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a> 
                        </div>
                        {/* <Link to="/login"><button type="button" className='button-18'>Sign In</button></Link> */}
                        <div className='user'>
                            <Link to="#"><UserCircle2 size={25} color="#ffffff" onClick={() => setOpenProfile((prev) => !prev)}/></Link>
                        </div>
                        {
                            openProfile && <Dropdown/>
                        }
                        
                       
                </nav>
        </div>
    </>
  )
}
else{
    return (
        <>
        <div class="hero">
                <nav>
                    <h2 class="logo"><span style={{color: '#e7b031'}}>G</span>rocerio</h2>
                    <ul>
                        <div className='comp' style={{paddingRight: '35rem'}}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Service</Link></li>
                            <li><Link to="/products">Products</Link></li>
                        </div>
                    </ul>
                        <div className='cart' onClick={()=>setShow(false)}>
                            <Link to="#"><ShoppingBasket size={25} color="#ffffff" /></Link>
                        </div>
                        <div className='search-box'>
                            <input  className="search-txt" type="text" name=" " placeholder='Type to search'/>
                            <a className='search-btn' href='#'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a> 
                        </div>
                        <Link to="/login"><button type="button" className='button-18'>Sign In</button></Link>
                        {/* <div className='user'>
                            <Link to="#"><UserCircle2 size={25} color="#ffffff" onClick={() => setOpenProfile((prev) => !prev)}/></Link>
                        </div>
                        {
                            openProfile && <Dropdown/>
                        } */}
                        
                       
                </nav>
        </div>
    </>
    )
}
}

export default Navbar