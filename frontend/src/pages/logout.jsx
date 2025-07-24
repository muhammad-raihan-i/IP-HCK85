import {useEffect} from "react"
import {Navigate,useNavigate} from "react-router"

export default function logout(properties){
    //if ada token di localStorage
    //hapus tokennya
    const navigate=useNavigate()
    useEffect(() => {
        navigate("/")
    }, []);
    return(
        <Navigate to="/"/>
    )
}

/*
copilot code

import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Logout() {
    useEffect(() => {
        localStorage.removeItem("token");
    }, []);

    return <Navigate to="/login" replace />;
}

*/


