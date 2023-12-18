import React from 'react'
import NavBar from '../components/Admin/NavBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {

  return (
    <div className="bg-[#dfe8e8] min-h-screen">
      <NavBar />
      <Outlet/>
    </div>
  )
}

export default AdminLayout
