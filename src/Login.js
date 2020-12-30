import React, {useState} from 'react';
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory(); // change the url programmatically
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth);
                // it sucessfully created a new user with email and password
                 history.push('/')
            }) 
            .catch(error => alert(error.message)); 
    }

    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth);
                // it sucessfully created a new user with email and password
                if(auth)
                 history.push('/')
            }) 
            .catch(error => alert(error.message)); 
    }
    return (
        <div className="login">
            <Link to='/'>
            <img
            className= "login_logo" 
            src="gws.png"
            />
            </Link>

        <div className="login_container">
            <h1> Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange =
                {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange =
                {e => setPassword(e.target.value)}/>
                
                <button type="submit" onClick={signIn}
                className="login_signInButton">Sign In</button>
            </form>

            <p>By signing-in you agre
                e to the GWS Condition of Use & Sale. P
                lease see our Privacy Notice, Our Cookies
                 Notice and our Interest-Base Ads</p>
            
            <button onClick={register} 
            className='login_registerButton'>Create your GWS Account</button>
        </div>

        </div>
    )
}

export default Login
