import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faEye } from '@fortawesome/free-solid-svg-icons'
import Popup from './Popup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListeDemande = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className="flex flex-col gap-5 ">
                <hr className="w-1/2 mx-auto" />
                <div className="flex justify-center py-5">
                    <h1 className="text-3xl font-medium text-center">Liste de demande</h1>
                </div>
                <div className="flex flex-row justify-between items-center py-2 px-4">
                    <div className="flex flex-row items-center gap-5 ">
                        <div className="avatar cursor-pointer lg:tooltip" data-tip="View Profile">
                            <div className="w-14 rounded-full">
                                <img src="../assets/Profile.jpg" />
                            </div>
                        </div>
                        <p className="text-xl">Wael Al-aouad</p>
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
                            <FontAwesomeIcon icon={faCheck} classNameName="text-xl" />
                        </div>
                        <div className="lg:tooltip" data-tip="Reject">  
                            <FontAwesomeIcon icon={faXmark} classNameName="text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {showPopup && <Popup onClose={handleClosePopup} />}
            <ToastContainer />

        </div>
    )
}

export default ListeDemande



