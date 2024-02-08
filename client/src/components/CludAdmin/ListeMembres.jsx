import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faXmark, faEye } from '@fortawesome/free-solid-svg-icons'
import MembreDetails from './MembreDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMembers, getMembers } from '../../features/Clubs/ClubSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sampleImage from '../../assets/profile.png';

const ListeMembres = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const dispatch = useDispatch();

    const members = useSelector(getAllMembers);

    useEffect(() => {
        if (!members.length) {
            dispatch(getMembers({clubId: "1" }));
        }
    }, [dispatch]);

    const renderedMembers = members.map(member => {
        return (
            <div className="flex flex-row justify-between items-center py-2 px-4 -z-0  " key={member.id}>
                <div className="flex flex-row items-center gap-5">
                    <div className="avatar cursor-pointer lg:tooltip" data-tip="View Profile">
                        <div className="w-14 rounded-full">
                            <img src={sampleImage} />
                        </div>
                    </div>
                    <p className="text-xl">{member.name}</p>
                </div>
                <div className="flex flex-row gap-5 cursor-pointer">
                    <div className="lg:tooltip" data-tip="Inspect">
                        <FontAwesomeIcon
                            icon={faEye}
                            className="text-xl"
                            onClick={togglePopup}
                        />
                    </div>
                    <div className="lg:tooltip" data-tip="Kick">
                        <FontAwesomeIcon icon={faDoorOpen} className='text-xl' />
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="flex flex-col gap-5">
                <hr className="w-1/2 mx-auto" />
                <div className="flex justify-center py-5 sticky z-10  top-0 bg-[#DEF2F1] w-full shadow-sm">
                    <h1 className="text-3xl font-medium text-center">Liste des membres</h1>
                </div>
                
                {renderedMembers}
            </div>

            {showPopup && <MembreDetails onClose={handleClosePopup} className=' z-30'/>}
            <ToastContainer />

        </div>
    )
}

export default ListeMembres



