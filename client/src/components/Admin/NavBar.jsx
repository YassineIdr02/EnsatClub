import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <div className="navbar bg-base-100 shadow-md justify-between flex px-10">
            <a className="text-3xl font-bold">Ensat Club</a>
            <div className="flex flex-row gap-4 ">
                <NavLink to="/" className="btn btn-square btn-ghost text-xl">Clubs</NavLink>
                <NavLink to="/" className="btn btn-square btn-ghost text-xl">Clubs</NavLink>
                <NavLink to="/"className="btn btn-square btn-ghost text-xl">Clubs</NavLink>
            </div>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-2xl  hover:cursor-pointer " onClick={handleLogout} />
        </div>
    )
}

export default NavBar