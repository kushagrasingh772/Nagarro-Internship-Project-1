import React from "react";
import {auth,provider} from "./firebase";
import { signInWithPopup } from "firebase/auth";
import Button from '@mui/material/Button';
import "./Login.css";
import GoogleIcon from '@mui/icons-material/Google';
function Login({setUser})
{
    const signIn = ()=>{
     signInWithPopup(auth,provider).then((result)=>{
          console.log(result.user);
           setUser(result.user);
     })
     .catch((error)=>alert(error.message));
}  
   return(
        <div className="login">
            <img class="mainImg" alt="noimg"src="https://www.bworldonline.com/wp-content/uploads/2021/07/Twitter-768x683.jpg"/>
            <div className="login-btn">
                <h1>Login</h1>
                <pre> 
                <Button  className="button" onClick={signIn} >
                    <GoogleIcon /> Sign in with Google
                </Button>
                </pre>
            </div>
        </div>
   )
}
export default Login;
