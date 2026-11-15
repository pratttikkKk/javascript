
import React, { useState } from "react";
import "./App.css";

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Welcome " + name);
    };

    {return (
        <form onSubmit={handleSubmit}>
            <h2>Student Registration</h2>

            <input
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Register</button>
        </form>
    );
}}

export default Registration;
