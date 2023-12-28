import React, {useEffect} from 'react'
import NavBar from '../components/Admin/NavBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {

  useEffect(() => {
    document.title = 'Admin | Home'
  }, [])
  
  return (
    <div className="bg-[#dfe8e8] min-h-screen">
      <NavBar />
      <Outlet/>
    </div>
  )
}

export default AdminLayout
