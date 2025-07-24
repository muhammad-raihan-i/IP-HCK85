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
    
    return (
        <div className="m10">
            <h1>Ngekosenak</h1>
            <p>Cari kos impianmu!</p>
            <br></br>
            <Form method="POST" onSubmit={async (e) => {
                //onSubmit start
                e.preventDefault();
                try {
                    const response = await http.post("/login", {
                        username,
                        password
                    });
                    // Simulate successful login
                    localStorage.setItem("token", response.data.token);
                    navigate("/home");
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Login failed",
                        text: error.response.data.message
                    });
                }
                //onSubmit end
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control type="text" name="usernameOrEmail" placeholder="Username or Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}