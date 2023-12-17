import React from 'react'
import NavBar from './NavBar'
import ClubCard from './ClubCards'
import ClubPage from './ClubPage'
import ClubPageFooter from './ClubPageFooter'

const AdminHome = () => {

  return (
    <div className="bg-[#feffff] h-screen">
      <NavBar className=" sticky"/>

      <ClubPage/>
    </div>
  )
}

export default AdminHome