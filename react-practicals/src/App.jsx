
import React, { Component } from "react";
import "./App.css";

class Registration extends Component {

    state = {
        name: "",
        email: ""
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Welcome " + this.state.name);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Student Registration</h2>

                <input name="name" placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.handleChange} />

                <input name="email" placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleChange} />

                <button type="submit">Register</button>
            </form>
        );
    }
}

export default Registration;
