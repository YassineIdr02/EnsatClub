import React from 'react'
import Posts from '../../features/gallery/Posts'
import AddPost from './AddPost'
import ListeDemande from './ListeDemande'
import SideBar from '../SideBar'
import Popup from './Popup'

const AdminHome = () => {
  return (
    <div className="grid grid-cols-6 flex-1 w-full">
    <div className="col-span-2 z-0">
      <SideBar className="sticky h-screen top-0" />
    </div>
    <div className="flex flex-col col-span-2 border-r border-l border-[#2B7A78] shadow-md">
      <div className="flex justify-center py-5 font-bold text-3xl my-3">
        <div>Welcome !!</div>
      </div>
      <AddPost />
      <Posts />
    </div>

    <div className="col-span-2 relative">
      <div className="top-0 sticky">
        <ListeDemande />
      </div>
    </div>
  </div>
  )
}

export default AdminHome
