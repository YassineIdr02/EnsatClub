import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUsers, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <div className="flex justify-left min-h-screen px-5">
      <div className="flex flex-col gap-10 items-center">
        <div className="mt-5">
          <a className="text-2xl font-bold">ENSAT Club</a>
        </div>

        <div className="lg:tooltip" data-tip="Home">
          <label className="btn btn-ghost btn-circle">
            <FontAwesomeIcon icon={faHome} className="text-2xl" />
          </label>
        </div>

        <div className="lg:tooltip" data-tip="Demandes">
          <label className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              <span className="badge badge-sm indicator-item">812</span>
            </div>
          </label>
        </div>

        <div className="lg:tooltip" data-tip="Membres">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FontAwesomeIcon icon={faUsers} className="text-2xl" />
              <span className="badge badge-sm indicator-item">9</span>
            </div>
          </label>
        </div>

        <div className="lg:tooltip" data-tip="Logout" onClick={handleLogout} >
          <label className="btn btn-ghost btn-circle avatar">
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-2xl" />
          </label>
        </div>

        {/* The following line can be replaced with your user profile avatar component */}
        <div className="lg:tooltip" data-tip="Profile">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="w-10 rounded-full my-1 text-2xl">YI</div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
