import Posts from './Activities'
import AddPost from './AddPost'
import ListeDemande from './ListeDemande'
import SideBar from '../SideBar'

const PresidentHome = () => {
  const username = localStorage.getItem("username")
  return (
    <div className="grid grid-cols-6 flex-1 w-full">

      <div className="col-span-1 z-0">
        <SideBar className="sticky h-screen top-0" />
      </div>

      <div className="flex flex-col col-span-3  border-l border-[#d3d9d8] ">
        <div className="flex justify-center py-5 font-bold text-3xl my-3">
          <h2>Welcome {username}!!</h2>
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

export default PresidentHome
