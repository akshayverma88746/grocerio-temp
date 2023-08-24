"use client";
import React, { useEffect, useContext } from 'react'
import {useNavigate} from "react-router-dom";
import {UserContext} from "C:/Users/Akshay/Desktop/grocerio - Copy/newone/src/App.js"
const Logout = () => {
  const {state, dispatch} = useContext(UserContext)
  const history = useNavigate();
  const getData = async () =>{
    try {
        const result = await fetch("http://localhost:3001/logout", {
            method  : "GET",
            headers : {
                Accept : "application/json",
                "Content-Type" : "application/json"
            },
            credentials : "include"
        })


        if(result.status === 200){
            dispatch({type:"USER", payload:false})
            window.alert("Logout Successful")
            history("/")
        }

    } catch (error) {
        console.log(error);
    }
}

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        
    </>
  )
}

export default Logout