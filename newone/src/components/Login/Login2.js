"use client"
import React from "react";
import axios from "axios"
import { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope ,faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {useNavigate ,BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import * as Components from './components';
import Home from "../Home/Home"
import "./Styles.css";
import e from "cors";
import {UserContext} from "C:/Users/Akshay/Desktop/grocerio - Copy/newone/src/App.js"

function Login2() {
    const {state, dispatch} = useContext(UserContext)
    const navigate = useNavigate();
    const [signIn, toggle] = React.useState(true);
    const [show ,setshow] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let name, value;
    
    const handleChange =  (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    
    
    const sendData = async (e) =>{
        e.preventDefault();
        const {name, email, password} = user
        const result = await fetch('http://localhost:3001/signup',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        });
        const data = await result.json();
        if(data){
            console.log(`data saved`);
            navigate("/")
        }
        else{
            console.log(`Not saved`)
        }
    }
    
    const sendData1 = async (e) =>{
        e.preventDefault();
        
        const result = await fetch('http://localhost:3001/login',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, password
            }),
            credentials : 'include'
        });
        const data = await result.json();
        if(data){
            dispatch({type:"USER", payload:true})
            window.alert(`Login Successful`);
            navigate("/")
        }
        else{
            window.alert(`Error`)
        }
    }
    
    const handleClick = () => {
        const newUrl = '/signup'; 
        window.history.pushState(null, '', newUrl);
    };
    
    const handleClick1 = () => {
        const newUrl = '/login'; 
        window.history.pushState(null, '', newUrl);
    };
    
    
    
    const toggleispassvis = () => {
        setshow(!show);
    }
    return (
    <div className="lg">
        <Components.Container>
             {/* Sign IN PART */}
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form method="POST">
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text'  placeholder='Name' name="name"  required onChange={handleChange} value={user.name}/>
                    <Components.Input type='email' placeholder='Email' name="email"  required onChange={handleChange} value={user.email}/>
                    <Components.Input type={(show) ? "text":"password"} placeholder='Password' name="password"  required onChange={handleChange} value={user.password}/>
                    <FontAwesomeIcon icon={show ? faEyeSlash : faEye} className='passicon'onClick={toggleispassvis} />
                    <Components.Button type="submit" onClick={sendData}>Sign Up</Components.Button>
                    <p className="social-text loginp">Or Sign up with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faFacebook} className='my-auto mx-auto' />
                        </a>
                    </div>
                </Components.Form>
            </Components.SignUpContainer>
            
            {/* LOGIN PART */}
            <Components.SignInContainer signinIn={signIn}>
                <Components.Form method="POST">
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' placeholder='Email' name="email"  required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <Components.Input type={(show) ? "text":"password"}  placeholder='Password' name="password" required onChange={(e)=> setPassword(e.target.value)} value={password}/>             
                    <FontAwesomeIcon icon={show ? faEyeSlash : faEye} className='passign' onClick={toggleispassvis} />
                    <Components.Anchor href='#' className="social-text">Forgot your password?</Components.Anchor>
                    <Components.Button type="submit" onClick={sendData1}>Sign In</Components.Button>
                    <p className="social-text loginp"> Sign in with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faFacebook} className='my-auto mx-auto' />
                        </a>
                    </div>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn} >
                <Components.Overlay signinIn={signIn}>

                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => {toggle(true); handleClick1()}}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, User!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => {toggle(false); handleClick()}}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    </div>
    )
}

export default Login2;
