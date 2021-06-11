import React from "react";
import { useHistory } from "react-router-dom";
//import Categories from "./Categories";

function LogIn() {

const routeChange = () =>{
    let history = useHistory();

    const handleRoute = () =>{
    history.push("Categories")
    }
}
    return (
        <div className="component">
            <p>Username</p>
            <input type="text" name="login" className="username"></input>
            <p>Password</p>
            <input type="text" name="password" className="password"></input>
            <p>Forgot Password?</p>

            <button type="submit" className="login" onClick={this.handleRoute}>Log In</button>
            <button type="submit" className="signup">Sign Up </button>

        </div>
    )
}

export default LogIn;