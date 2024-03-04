import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/user/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUsers, faArrowRightFromBracket, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { getDemandes, getDemandsCount, getMembers, getMembersCount } from '../features/Clubs/ClubSlice';
import NewReservation from './CludAdmin/NewReservation';
import { useEffect } from 'react';

const SideBar = ({ toggleDemandeList, toggleMembreList }) => {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const memCount = useSelector(getMembersCount)
  const demCount = useSelector(getDemandsCount)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  const handleCloseAddPopup = () => {
    setShowAdd(false);
};

  const togglePopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    dispatch(getMembers({ clubId: params.clubId }))
    dispatch(getDemandes({ clubId: params.clubId }))


  }, [params])

  return (
    <div className="flex justify-left min-h-screen px-5 z-0">
      <div className="flex flex-col gap-16  items-center">
        <div className="mt-5">
          <a className="text-3xl font-bold">ENSAT Club</a>
        </div>

        <div className="lg:tooltip" data-tip="Home">
          <label className="btn btn-ghost btn-circle">
            <FontAwesomeIcon icon={faHome} className="text-3xl" />
          </label>
        </div>

        <div className="lg:tooltip" data-tip="Demandes" >
          <label className="btn btn-ghost btn-circle" onClick={toggleDemandeList}>
            <div className="indicator">
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              <span className="badge badge-sm indicator-item">{demCount}</span>
            </div>
          </label>
        </div>

        <div className="lg:tooltip" data-tip="Membres">
          <label tabIndex="0" className="btn btn-ghost btn-circle" onClick={toggleMembreList}>
            <div className="indicator">
              <FontAwesomeIcon icon={faUsers} className="text-3xl" />
              <span className="badge badge-sm indicator-item">{memCount}</span>
            </div>
          </label>
        </div>

        <div className="lg:tooltip" data-tip="Reservations">
          <label tabIndex="0" className="btn btn-ghost btn-circle" onClick={togglePopup}>
            <FontAwesomeIcon icon={faCalendar} className="text-3xl" />
          </label>
        </div>

        <div className="lg:tooltip" data-tip="Logout" onClick={handleLogout} >
          <label className="btn btn-ghost btn-circle avatar">
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-3xl" />
          </label>
        </div>

        {/* The following line can be replaced with your user profile avatar component */}
        <div className="lg:tooltip" data-tip="Profile">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="w-10 rounded-full my-1 text-3xl">YI</div>
          </label>
        </div>
      </div>
      
      {showPopup && <NewReservation onClose={handleClosePopup} />}
    </div>
  );
};

export default SideBar;
