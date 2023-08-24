import React, {useContext} from 'react'
import "./dropdown.css"
import {useNavigate, useLocation,BrowserRouter as Router, Link, NavLink, useHistory} from "react-router-dom";
import {UserContext} from "C:/Users/Akshay/Desktop/grocerio - Copy/newone/src/App.js"
const Dropdown = () => {
  const {state, dispatch} = useContext(UserContext);
  const history = useNavigate();
  return (
    <div className='flex flex-col dropDownProfile'>
        <ul className='flex flex-col gap-4'>
                <Link to='/profile' style={{color: '#323335', fontWeight: '600'}} ><li>Profile</li></Link>
                <Link to='/logout' style={{color: '#323335', fontWeight: '600'}}><li>Logout</li></Link>
        </ul>
    </div>
  )
}

export default Dropdown