import React from 'react'
import NavBar from './NavBar'
import ClubCard from './ClubCards'
import ClubPage from './ClubPage'
import { Outlet } from 'react-router-dom'

const AdminHome = () => {

  return (
    <div className="bg-[#dfe8e8] min-h-screen">
      <NavBar />
      <Outlet/>
    </div>
  )
}

export default AdminHome
