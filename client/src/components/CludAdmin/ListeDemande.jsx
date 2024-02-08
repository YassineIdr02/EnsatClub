import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faEye } from '@fortawesome/free-solid-svg-icons';
import Popup from './Popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { acceptDemand, declineDemand, getAllDemandes, getDemandes } from '../../features/Clubs/ClubSlice';
import { useParams } from 'react-router-dom';


const ListeDemande = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { clubId } = useParams();
  const dispatch = useDispatch();
  const demandes = useSelector(getAllDemandes);

  useEffect(() => {
    console.log(clubId)
    if (!demandes.length)
        dispatch(getDemandes({ clubId }));
  }, [dispatch, clubId]);

  const togglePopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAccept = (demandId) => {
    dispatch(acceptDemand({demandId}))
    toast.success('Demand accepted successfully');
  };

  const handleReject = (demandId) => {
    dispatch(declineDemand({demandId}))
    toast.error('Demand rejected');
  };

  return (
    <div>
        <hr className="w-1/2 mx-auto" />
          <div className="flex justify-center py-5">
            <h1 className="text-3xl font-medium text-center">Liste de demande</h1>
          </div>
      {demandes.map((demand) => (
        <div key={demand.id} className="flex flex-col gap-5 ">
          <div className="flex flex-row justify-between items-center py-2 px-4">
            <div className="flex flex-row items-center gap-5 ">
              <div className="avatar cursor-pointer lg:tooltip" data-tip="View Profile">
                <div className="w-14 rounded-full">
                  <img src="" alt="Profile" />
                </div>
              </div>
              <p className="text-xl">{demand.name}</p>
            </div>
            <div className="flex flex-row gap-5 cursor-pointer">
              <div className="lg:tooltip" data-tip="Inspect">
                <FontAwesomeIcon icon={faEye} className="text-xl" onClick={togglePopup} />
              </div>
              <div className="lg:tooltip" data-tip="Accept">
                <FontAwesomeIcon icon={faCheck} className="text-xl" onClick={() => handleAccept(demand.id)} />
              </div>
              <div className="lg:tooltip" data-tip="Reject">
                <FontAwesomeIcon icon={faXmark} className="text-xl" onClick={() => handleReject(demand.id)} />
              </div>
            </div>
          </div>
          {showPopup && <Popup onClose={handleClosePopup} demandId={demand.id} />}
        </div>
      ))}

      
      <ToastContainer />
    </div>
  );
};

export default ListeDemande;
