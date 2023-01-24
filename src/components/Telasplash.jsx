import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import './telasplash.css'

export default function Telasplash(){
    let navigate = useNavigate();  
    useEffect(() => {
        const timeout = setTimeout(() => 
            navigate('/form-final')
        , 5500)     
    }, [])
    return (<div id="splash">
        <div id="loader">

        </div>
    </div>);
}