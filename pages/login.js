import React, { useState } from "react";
React

export default function Login(){
    //   const [username, setUsername] = useState("");
    let username=React.useRef();
    let password=React.useRef();
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(username.current.value)
        if (username.current.value==="admin" && password.current.value==="admin"){
            window.location="/homepage"
            }else{
                alert('Please enter correct credentials')
                }
                };
    return (
                <div className='login-container'>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username: </label>
                        <input type='text' id='username' ref={username} required/><br/>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' id='password' ref={password} required/><br/>
                        <button type='submit'>Log In</button>
                    </form>
                </div>
    )
}