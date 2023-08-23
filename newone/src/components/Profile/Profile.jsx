"use client";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const [userData, setuserData] = useState("");
    const navigate = useNavigate();
    const aboutpage = async () => {
        try {
          const result = await fetch("http://localhost:3001/profile", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
    
          const realData = await result.json();
    
          setuserData(realData);
    
          if (result.status === 401) {
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
        aboutpage();
      }, []);
  return (
    <div>
        
    </div>
  )
}

export default Profile