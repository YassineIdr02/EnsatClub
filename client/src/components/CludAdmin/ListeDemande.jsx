import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faEye, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Popup from './Popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  acceptDemand,
  declineDemand,
  getAllDemandes,
  getDemandes,
} from '../../features/Clubs/ClubSlice';
import sampleImage from '../../assets/profile.png';
import { useParams } from 'react-router-dom';

const ListeDemande = () => {
  const [showPopup, setShowPopup] = useState(false);
  const clubId = useParams();
  const dispatch = useDispatch();
  const demandes = useSelector(getAllDemandes);

  useEffect(() => {
    if (!demandes.length) {
      dispatch(getDemandes(clubId));
    }
  }, [dispatch, clubId]);

  const togglePopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAccept = (demand_id) => {
    dispatch(acceptDemand({ demand_id }));
    toast.success('Demand accepted successfully');
  };

  const handleReject = (demand_id) => {
    dispatch(declineDemand({ demand_id }));
    toast.error('Demand rejected');
  };

  const renderedDemandes = demandes.map((demand) => (
    <div key={demand.id} className="flex flex-col gap-5 hover:bg-slate-200 duration-300 transition-background hover:cursor-pointer">
      <div className="flex flex-row justify-between items-center py-2 px-4">
        <div className="flex flex-row items-center gap-5">
          <div
            className="avatar cursor-pointer lg:tooltip"
            data-tip="View Profile"
            onClick={togglePopup}
          >
            <div className="w-14 rounded-full">
              <img src={sampleImage} alt="Profile" />
            </div>
          </div>
          <p className="text-xl">{demand.name}</p>
        </div>
        <div className="flex flex-row gap-5 cursor-pointer">
          <div className="lg:tooltip" data-tip="Inspect">
            <FontAwesomeIcon
              icon={faEye}
              className="text-xl"
              onClick={togglePopup}
            />
          </div>
          <div className="lg:tooltip" data-tip="Accept">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-xl"
              onClick={() => handleAccept(demand.id)}
            />
          </div>
          <div className="lg:tooltip" data-tip="Reject">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-xl"
              onClick={() => handleReject(demand.id)}
            />
          </div>
        </div>
      </div>
      {showPopup && <Popup onClose={handleClosePopup} demand={demand} />}
    </div>
  ));

  return (
    <div>
      <hr className="w-1/2 mx-auto" />
      <div className="flex justify-center py-5 z-0">
        <h1 className="text-3xl font-medium text-center">Liste de demande</h1>
      </div>
      {demandes.length === 0 ? (
        <div className='flex flex-col gap-10 my-[55%] opacity-30 w-44 mx-auto    '>
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-9xl " />
          <h1 className="text-4xl text-gray-600 text-center">
            Aucune demande pour le moment !
          </h1>
        </div>
      ) : (
        <div className="flex flex-col gap-5">{renderedDemandes}</div>
      )}


      <ToastContainer theme="colored" />
    </div>
  );
};

export default ListeDemande;
