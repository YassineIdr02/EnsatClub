import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { handleLogin } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userRef = useRef(null)

    useEffect(() => {
        userRef.current?.focus()
    }, [])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUserInput = e => setUsername(e.target.value)
    const handlePasswordInput = e => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin({username, password}))
        setPassword('')
        setUsername('')
        navigate('/')
    }

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 ">
            <div className="md:w-1/3 max-w-2xl">
                <h1 className="text-4xl text-center my-5 font-bold text-[#17252A]">Sign in</h1>
                <form>
                    <div className="relative">
                        <input type="text"
                            id="username"
                            value={username}
                            ref={userRef}
                            onChange={handleUserInput}
                            placeholder="Enter username" required
                            className=" peer placeholder-transparent w-full bg-transparent border-b border-[#ADADAD] my-2 px-1 focus:border-[#2B7A78] focus:outline-none" />
                        <label htmlFor="username" className="absolute left-0  -top-3.5 hover:cursor-text  peer-placeholder-shown:text-base peer-placeholder-shown:text-[#3AAFA9] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#17252A] peer-focus:text-sm transition-all ">Username</label>
                    </div>
                    <div className="relative mt-3">
                        <input type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordInput}  
                            placeholder="Enter password" required
                            className=" peer placeholder-transparent w-full bg-transparent border-b border-[#ADADAD] my-2 px-1 focus:border-[#2B7A78] focus:outline-none" />
                        <label htmlFor="password" className="absolute left-0 -top-3.5 hover:cursor-text  peer-placeholder-shown:text-base peer-placeholder-shown:text-[#3AAFA9] peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#17252A] peer-focus:text-sm transition-all ">Password</label>
                    </div>
                </form>
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-[#3AAFA9] hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                </div>
                <div className="text-center md:text-left">
                    <div className="flex justify-center">
                        <button 
                            className="btn btn-active btn-ghos bg-[#3AAFA9] mt-5 w-2/3 px-1" 
                            onClick={handleSubmit}
                        >Sign in</button>
                    </div>
                </div>
            </div>
            <div className="md:w-2/3 max-w-2xl">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image"
                />
            </div>
        </section>
    );
};

export default LoginForm;