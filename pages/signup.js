import React from "react";
import { useState } from "react";
export default function Signup(){
    //   const [name, setName] = useState("");
    let name=React.useRef();
    let email=React.useRef()
    let password=React.useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name.current.value===""||email.current.value===""){
            alert('Please fill out all fields')
            }else {
                fetch('/signup',
                {method:'POST' , headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name.current.value,
                    email: email.current.value,
                    password:password.current.value
                    })
                    }).then((res) => res.json())
                    .catch((err) => console.log(err))
                    .then((data) => {
                        if (data.error){
                            alert(data.error);
                            } else {
                                window.location='/'
                            }
                    });
                    }
                    }
        return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" ref={name} required/><br />
                <label htmlFor="email">Email Address: </label>
                <input type="email" id="email" ref={email} required/><br />
                <label htmlFor="pwd">Password: </label>
                <input type="password" id="pwd" ref={password} required/><br />
                <button type="submit">Sign up</button>
            </form>
        </div>
        )
}
