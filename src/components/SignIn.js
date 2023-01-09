import React from "react";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import cover from "../assets/cover.png";
import '../style/SignIn.scss';
const clientId = process.env.CLIENT_ID
const Contact=()=>{
    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:{clientId},
                scope:""
            })
        }
        gapi.load("client:auth2",start)
    })
    const google = ()=>{
        window.open("http://localhost:5000/auth/google","_self")
    }
        return (<div>
            {/* <form className="form">
                <h3 className="h3">Sign In</h3>

                <div className="form-group">
                    <label className="label">User ID:</label>
                    <input type="text" className="UserID" placeholder="Enter Id" />
                </div>

                <div className="form-group">
                    <label className="label">Password:</label>
                    <input type="password" className="Password" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">SUBMIT</button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot Password?</a>
                </p>
                <h4>OR</h4>
                <hr /> */}
                <h1 className="heading-tag">WELCOME TO WEAL'S CONFESSION FORUM</h1>
                <img src={cover} alt="coverpage" className="signin-cover" referrerPolicy="no-referrer"/>
                {/* <div onClick={google} style={{position:"absolute",color:"white",bottom:"45%",left:"45%"}}>Google</div> */}
                <button type="button" class="login-with-google-btn" onClick={google}>Sign in with Google</button>
                {/* <Logout/> */}
            {/* </form> */}
            </div>
        );
    }

export default Contact;