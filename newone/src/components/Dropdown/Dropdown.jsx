import React from 'react'
import "./dropdown.css"
import {useNavigate, useLocation,BrowserRouter as Router, Link, NavLink, useHistory} from "react-router-dom";
const Dropdown = () => {
  const history = useNavigate();
  // const logout = () =>{
  //   localStorage.clear();
  //   history.push("/")
  // }
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