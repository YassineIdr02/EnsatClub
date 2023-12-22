import Posts from './Activities';
import AddPost from './AddPost';
import ListeDemande from './ListeDemande';
import SideBar from '../SideBar';
import ListeMembres from './ListeMembres';

const PresidentHome = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="grid grid-cols-6 flex-1 w-full h-screen">

      <div className="col-span-1 z-0 sticky h-screen top-0">
        <SideBar  />
      </div>

      <div className="flex flex-col col-span-3 border-l border-[#d3d9d8] h-screen">
        <div className="flex justify-center py-5 font-bold text-3xl my-3">
          <h2>Welcome {username}!!</h2>
        </div>
        <div > {/* Adjust the height as needed */}
          <AddPost />
        </div>
        <hr className="w-full" />
        <div className="overflow-y-auto"> {/* Use flex-1 to occupy remaining space */}
          <Posts />
        </div>
      </div>

      <div className="col-span-2 h-screen top-0  overflow-y-auto ">
          <ListeMembres />
      </div>

    </div>
  );
};

export default PresidentHome;
