import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import logo from "../../assets/EnsatClub.png"
import ClubForm from './ClubForm';
import { FormProvider } from '../../context/FormContext';
import AddClub from './AddClub';
import JoinClubPop from '../JoinClub';
import Cookies from 'js-cookie';

const NavBar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    const token = Cookies.get("token")

    const [showAdd, setShowAdd] = useState(false);
    const [showJoin, setShowJoin] = useState(false);

    const toggleAddPopup = () => {
        setShowAdd(true);
    };

    const handleCloseAddPopup = () => {
        setShowAdd(false);
    };
    const toggleJoinPopup = () => {
        setShowJoin(true);
    };

    const handleCloseJoinPopup = () => {
        setShowJoin(false);
    };

    return (
        <div className="navbar shadow-md justify-between  flex px-10 bg-[#f3fffe] text-[#17252A] sticky top-0 z-10 ">
            <div className="flex items-center">
                <div className="w-16 h-12 rounded-full overflow-hidden mr-4">
                    <img src={logo} alt="" className="object-cover w-full h-full" />
                </div>
                <h2 className="text-2xl font-bold ">Ensat Club</h2>
            </div>
            <div className="flex flex-row gap-6">
                {token && <NavLink className="text-2xl cursor-pointer" to="dashboard"> <h2 >Dashboard</h2> </NavLink> }
                <NavLink to="/admin" className="text-2xl cursor-pointer"><h2>Clubs</h2></NavLink>
                {token && <h2 className="text-2xl cursor-pointer" onClick={toggleAddPopup}>Add a new club</h2>}
                <h2 className="text-2xl cursor-pointer" onClick={toggleJoinPopup}>Join a club</h2>
            </div>
            <div>
                <input type="text" placeholder="Search" className="input input-bordered w-32 md:w-auto mx-3" />
                {token && <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-2xl hover:cursor-pointer" onClick={handleLogout} />}
            </div>
            <FormProvider>
                {showAdd && <AddClub onClose={handleCloseAddPopup} />}
                {showJoin && <JoinClubPop onClose={handleCloseJoinPopup} />}
            </FormProvider>
        </div>
    )
}

export default NavBar