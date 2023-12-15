import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="bg-[#DEF2F1]">
      <Outlet/>
    </div>
  )
}

export default AdminLayout
