// ini halaman yang muncul kalau
// user mengakses ngekosenak.com/
import http from "../libraries/http.js"
import { useState, useEffect } from "react";
import {Navigate,useNavigate} from "react-router"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2"

//di dalem dunia jsx, pake navigate N gede
//di dalem dunia javascript, pake navigate n kecil


export default function Indcx(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate();
    async function mySubmit(event){
        //onSubmit start
        event.preventDefault();
        try {
            const response = await http.post("/login", {
                username,
                password
            });
            console.log(response,"ini response")
            // Simulate successful login
            localStorage.setItem("token", response.data.token);
            navigate("/home");
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Login failed",
                text: error.response.data.message
            });
        }
        //onSubmit end
    }
    return (
        <div className="m10">
            <h1>Ngekosenak</h1>
            <p>Cari kos impianmu!</p>
            <br></br>
            <Form method="POST" onSubmit={mySubmit}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control 
                    type="text"
                    name="username" 
                    placeholder="Username or Email"
                    onChange={function(event){setUsername(event.target.value)}}
                    
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={function(event){setPassword(event.target.value)}}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="mt-3">
                <span>Belum punya akun? </span>
                <Button variant="link" onClick={() => navigate("/register")}>
                    Daftar segera
                </Button>
            </div>
        </div>
    );
}