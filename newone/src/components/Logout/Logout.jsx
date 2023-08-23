"use client";
import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom";
const Logout = () => {
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